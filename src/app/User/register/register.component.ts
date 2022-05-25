import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDetail } from 'src/app/models/user-detail.model';
import { RegisterUserService } from 'src/app/shared/register-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service:RegisterUserService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm)
  {
    this.service.RegisterUser().subscribe(
      res=>{
        this.resetForm(form);
        },
        err => {console.log("err"); }  
      );
  }
  resetForm(form:NgForm)
  {
    form.form.reset();
    this.service.formRegisterData=new UserDetail();
  }
}
