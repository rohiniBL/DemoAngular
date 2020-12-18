import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguradGuard implements CanActivate {

  constructor(private router:Router){
  }
  canActivate(){
      if(localStorage.getItem('token') != null){
        return true
      }
      else{
        alert("Please Login")
        this.router.navigateByUrl("/login")
      }
    
  }
  
}
