import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http'
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginDetailService {
  logincheck:boolean;
  data:any;

  constructor(private http:HttpClient) { }


  
  formLoginData:Login =new Login();
  readonly baseURL='https://localhost:7076/api/Customer/login'

  LoginUser()
  {
    this.http.post(this.baseURL,this.formLoginData).subscribe(data =>
      {
      if(data==null)
      {
        this.logincheck=false;
      }
      this.logincheck=true;
      }
      )
    return this.http.post(this.baseURL,this.formLoginData);
  }
}
