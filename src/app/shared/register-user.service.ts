import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { UserDetail } from '../models/user-detail.model';



@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http:HttpClient) { }

  formRegisterData:UserDetail = new UserDetail();
  readonly baseURL1='https://localhost:7076/api/Customer/register'

  RegisterUser()
  {
    return this.http.post(this.baseURL1,this.formRegisterData);

  }
}
