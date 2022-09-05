import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators, FormArray } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hide = true;
  constructor(private _formBuilder: FormBuilder, private _router:Router) {}

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }

  goToForgotPassword(){
    this._router.navigate(['/', 'forgotpassword']);
  }

  goToSignUp(){
    this._router.navigate(['/','signup'])
  }
}
