import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../shared/movie-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public movielist:MovieListService,private router:Router) { }

  ngOnInit(): void {
  }
  LogOut()
  {
    this.movielist.logeduserdetail=null;
    this.router.navigate(["/User/login"])
  }

}
