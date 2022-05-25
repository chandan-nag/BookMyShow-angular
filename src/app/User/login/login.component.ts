import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieListService } from 'src/app/shared/movie-list.service';
//import { Login } from 'src/app/shared/user-detail.model';

import { LoginDetailService } from 'src/app/shared/login-detail.service';
import { Login } from 'src/app/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Email:string='';
  Password:string='';
  


  constructor(public service:LoginDetailService,public movielist:MovieListService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm)
  {
   this.service.LoginUser().subscribe(
     data => {
       console.log(data);
       this.resetForm(form);
       if(data==null)
       {
         alert("invalid credential");
         return;
       }
       this.movielist.logeduserdetail=data;
     }
   )
  }
  resetForm(form:NgForm)
  {
    form.form.reset();
    this.service.formLoginData=new Login();
  }

  userlogin()
  {

  }

}
