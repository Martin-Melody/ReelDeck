import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NavbarService } from "../../shared/services/navbar.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private _auth: AuthService, public nav: NavbarService, public _router:Router) {
    _router.events.subscribe((val)=>{
      if (
        this._router.url === '/login' ||
        this._router.url === '/signup' ||
        this._router.url === '/forgotpassword' ||
        this._router.url === '/confirm'
      ) {
        this.nav.hide();
      } else {
        this.nav.show();
      }
    })
  }

  ngOnInit(): void {}

  logOut() {
    this._auth.logout();
  }
}
