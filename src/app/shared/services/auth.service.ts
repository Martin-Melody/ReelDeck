import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _auth: AngularFireAuth, private _router: Router) {}

  // Login Method

  login(email: string, password: string) {
    this._auth.signInWithEmailAndPassword(email, password).then(
      (res) => {
        localStorage.setItem('token', 'true');

        if (res.user?.emailVerified == true) {
          this._router.navigate(['/','home']);
        } else {
          alert('meow')
          this._router.navigate(['/','verify']);
        }
      },
      (err) => {
        alert('Something went wrong.');
        this._router.navigate(['/','login']);
      }
    );
  }

  // Register Method
  register(email: string, password: string) {
    this._auth.createUserWithEmailAndPassword(email, password).then(
      (res) => {
        alert('Registration Successful');
        this._router.navigate(['/','verify']);
        this.SendVerficationEmail(res.user);
      },
      (err) => {
        alert('Something went Wrong');
        this._router.navigate(['/','register']);
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
        this._router.navigate(['/','login']);
      },
      (err) => {
        alert('Soemthing Went Wrong');
      }
    );
  }

  // Send Email Verification
  SendVerficationEmail(user: any) {
    this._auth.currentUser
      .then((u) => u?.sendEmailVerification())
      .then(
        () => {
          this._router.navigate(['/','verify']);
        },
        (err: any) => {
          alert(
            'Something Went Wrong. Not able to send mail to registered Email.'
          );
        }
      );
  }
}


