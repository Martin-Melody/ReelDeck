import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { DialogService } from './dialog.service';
import { Auth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  LoginedState:boolean = false;

  constructor(
    private _auth: AngularFireAuth,
    private _router: Router,
    private _dialogService: DialogService,
    private _fireAuth:Auth
  ) {}

  // Login Method

  login(email: string, password: string) {
    this._auth.signInWithEmailAndPassword(email, password).then(
      (res:any) => {
        localStorage.setItem('token', 'true');

        if (res.user?.emailVerified == true) {
          this._router.navigate(['/', 'home']);
        } else {
          this._dialogService.alertDialog({
            title: 'Looks like your email is not verified :O',
            message: 'Have you tried looking in your spam for our email??',
          });
        }
      },
      (err:any) => {
        this._dialogService.alertDialog({
          title: 'User not Found',
          message: 'please enter your details again',
        });
        this._router.navigate(['/', 'login']);
      }
    );
  }

  // Register Method
  register(email: string, password: string) {
    this._auth.createUserWithEmailAndPassword(email, password).then(
      (res:any) => {
        this._dialogService.alertDialog({
          title: 'Registration successful',
          message: 'Welcome to the Team :) and make sure to verify your email.',
        });
        this._router.navigate(['/', 'login']);
        this.SendVerficationEmail(res.user);
      },
      (err:any) => {
        this._dialogService.alertDialog({
          title: 'Something went wrong :/',
          message: 'Please try registering again.',
        });
        this._router.navigate(['/', 'register']);
      }
    );
  }

  // Sign Out Method
  logout() {
    this._auth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this._router.navigate(['/', 'login']);
      },
      (err:any) => {
        alert(err.message);
      }
    );
  }

  // Forgot Password
  forgotPassword(email: string) {
    this._auth.sendPasswordResetEmail(email).then(
      () => {
        this._dialogService.alertDialog({
          title: 'Link successfully send',
          message: 'Check your Email!',
        });
        this._router.navigate(['/', 'login']);
      },
      (err:any) => {
        this._dialogService.alertDialog({
          title: 'Something went wrong :?',
          message: 'please try again.',
        });
      }
    );
  }

  // Send Email Verification
  SendVerficationEmail(user: any) {
    this._auth.currentUser
      .then((u:any) => u?.sendEmailVerification())
      .then(
        () => {
          this._router.navigate(['/', 'login']);
        },
        (err: any) => {}
      );
  }

  // Sign In With Google
  signInWithGoogle() {
    return this._auth.signInWithPopup(new GoogleAuthProvider()).then(
      (res:any) => {
        this._router.navigate(['/home']);
        localStorage.setItem('token', JSON.stringify(res.user?.uid));
      },
      (err:any) => {
        this._dialogService.alertDialog({
          title:'Looks like there was a problem :/',
          message:'Try creating an account the other way :).'
        })
      }
    );
  }

  get isLoggedIn():boolean{
    const user = JSON.parse(localStorage.getItem('token') as string);

    return user !== null? true : false;

  }

  // Check if user is logged in
  // isLoggedIn(){
  //   reutrn this._auth.
  // }
}
