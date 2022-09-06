import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _auth: AngularFireAuth,
    private _router: Router,
    private _dialogService: DialogService
  ) {}

  // Login Method

  login(email: string, password: string) {
    this._auth.signInWithEmailAndPassword(email, password).then(
      (res) => {
        localStorage.setItem('token', 'true');

        if (res.user?.emailVerified == true) {
          this._router.navigate(['/', 'home']);
        } else {
          this._dialogService.alertDialog({
            title: 'Looks like your email is not verified :O',
            message: 'Have you tried looking in your spam for our email??',
          });
          this._router.navigate(['/', 'verify']);
        }
      },
      (err) => {
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
      (res) => {
        alert('Registration Successful');
        this._router.navigate(['/', 'verify']);
        this.SendVerficationEmail(res.user);
      },
      (err) => {
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
      (err) => {
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
      (err) => {
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
      .then((u) => u?.sendEmailVerification())
      .then(
        () => {
          this._router.navigate(['/', 'verify']);
        },
        (err: any) => {}
      );
  }
}
