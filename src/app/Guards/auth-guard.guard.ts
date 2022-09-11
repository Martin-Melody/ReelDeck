import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { DialogService } from '../shared/services/dialog.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(public _authService:AuthService, public _router:Router, public _dialogService:DialogService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // if somebody is loggedin return true, otherwise false.
      if (this._authService.isLoggedIn !== true) {
        this._dialogService.alertDialog({
          title: 'Access Denied',
          message:'You must be logged in',
        })
        this._router.navigate(['/','login'])
      }

      return true;
    
  }
  
}
