import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketDetailService } from 'src/app/shared/ticket-detail.service';

@Component({
  selector: 'app-seat-detail',
  templateUrl: './seat-detail.component.html',
  styleUrls: ['./seat-detail.component.css']
})
export class SeatDetailComponent implements OnInit {

  k:number;
  arr:number[]=[];

  constructor( public service:TicketDetailService,public route:Router) { }

  ngOnInit(): void {
    console.log(this.service.TicketAvailable);
    console.log(this.service.Tickets);

    for(var i=this.service.TicketAvailable;i>(this.service.TicketAvailable-this.service.Tickets);i--)
    {
      this.arr.push(i);
    }
  }
  onclick()
  {
    this.route.navigate(["/"])

  }

}
