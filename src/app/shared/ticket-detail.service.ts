import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketDetailService {
  TicketAvailable:number;
  seats:number;

  constructor(private http:HttpClient) { }

  getNoOfTickets(MovieId:number,TheatreId:number,ShowId:number)
  {
    this.http.get('https://localhost:7076/api/Ticket/'+MovieId+'/'+TheatreId+'/'+ShowId).subscribe((data:any) => {
      console.log(data[0]);
      this.TicketAvailable=data[0];
      this.seats=data[0];
      console.log();
    })

  }
  bookTickets(MovieId:number,TheatreId:number,ShowId:number,tickets:number)
  {
    this.http.get('https://localhost:7076/api/Ticket/'+MovieId+'/'+TheatreId+'/'+ShowId+'/'+tickets).subscribe((data:any)=>
    {
      return 1;
    }
    )
  }
}
