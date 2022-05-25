import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MovieListService } from '../shared/movie-list.service';
import { TheatreDetailService } from '../shared/theatre-detail.service';
import { TicketDetailService } from '../shared/ticket-detail.service';

@Component({
  selector: 'app-theatre-detail',
  templateUrl: './theatre-detail.component.html',
  styleUrls: ['./theatre-detail.component.css']
})
export class TheatreDetailComponent implements OnInit {
   
id:number;
MovieName:string;
ShowId:number;
TheatreId:number;
Seats:number;
  constructor(private http:HttpClient,private route:ActivatedRoute,public movielistservice:MovieListService,
     public theatreservice:TheatreDetailService,public ticketservice:TicketDetailService,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    if(this.movielistservice.logeduserdetail==null)
    {
      this.router.navigateByUrl('/login');
    }
    this.movielistservice.GetMovieById(this.id);
    this.theatreservice.getTheatres(this.id);
    

  }
  ShowClick(sId:number,tId:number)
    {
      this.ticketservice.getNoOfTickets(this.id,tId,sId);
      this.TheatreId=tId;
      this.ShowId=sId;
    }
    BookTicket()
    {
      let n=parseInt((document.getElementById("tickets") as HTMLInputElement).value);
      console.log(n);
      this.ticketservice.bookTickets(this.id,this.TheatreId,this.ShowId,n);
      alert("tickets booked");
      //this.router.navigateByUrl('/seat');
    }


}
