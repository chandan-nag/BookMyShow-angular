import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TheatreModel } from '../models/theatre-model.model';


@Injectable({
  providedIn: 'root'
})
export class TheatreDetailService {

  constructor(private http:HttpClient) { }

  readonly baseURL='https://localhost:7076/api/Theatre/MovieId'
  list : TheatreModel[];

  getTheatres(id:number)
  {
    return this.http.get('https://localhost:7076/api/Theatre/'+id).toPromise().then(res=>this.list=res as TheatreModel[]);
    //console.log(this.list);
  }
}
