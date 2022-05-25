import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() Movie:any;
  @Input() MovieId:number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.MovieId);
    console.log(this.Movie);
    if(this.MovieId==1)
    {
      this.Movie.imagePath="poster6.jpg"
    }
    else if(this.MovieId==2)
    {
    this.Movie.imagePath="poster8.jpg"
    }
    else if(this.MovieId==3)
    {
      this.Movie.imagePath="poster7.jpg"
    }
    else
    {
      this.Movie.imagePath="poster11.jpg"
    }
  }

}
