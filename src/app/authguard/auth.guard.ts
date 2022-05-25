import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginDetailService } from '../shared/login-detail.service';
import { LoginComponent } from '../User/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public c:boolean;

  constructor(private auth:LoginDetailService,private route:Router){}
  canActivate() {
    this.c=this.auth.logincheck;
    if(!this.c)
    {
      this.route.navigateByUrl('/login');
    }
    return true;
  }
}
