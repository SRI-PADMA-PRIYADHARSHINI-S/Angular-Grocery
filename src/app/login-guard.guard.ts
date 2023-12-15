import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean{
      if(sessionStorage.getItem('isentered')=="false" || sessionStorage.getItem('isentered')==null){
        this.route.navigate(['/login'],{queryParams:{returl:route.url}});
        return false;
      }
      else{
        return true;
      }

  }

}
