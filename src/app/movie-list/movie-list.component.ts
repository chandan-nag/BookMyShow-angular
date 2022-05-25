import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../shared/movie-list.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(public service:MovieListService) { }

  ngOnInit(): void {
    this.service.GetAllMovies();
    console.log(this.service.list);
    
  }

}
