import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieModel } from '../models/movie-model.model';


@Injectable({
  providedIn: 'root'
})
export class MovieListService {
 
  constructor(private http:HttpClient) { }
  public logeduserdetail:any= null;
  readonly baseURL='https://localhost:7076/api/Movie'
  
  list : MovieModel[];
  Id:number=0;
  MovieName:string='';
  data:MovieModel=new MovieModel();

  GetAllMovies()
  {
    return this.http.get(this.baseURL).toPromise().then(res=>this.list=res as MovieModel[]);

  }
  GetMovieById(id:number)
  {
    this.http.get('https://localhost:7076/api/Movie/'+id).subscribe((data:any)=>
    {
      console.log(data.id);
      this.MovieName=data.name;
      console.log(this.MovieName);
    })
  }

}


