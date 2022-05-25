import { Component, OnInit } from '@angular/core';
import { TheatreDetailService } from '../shared/theatre-detail.service';
import { TicketDetailService } from '../shared/ticket-detail.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {

  constructor(public service:TicketDetailService) { }

  ngOnInit(): void {
  }

}
