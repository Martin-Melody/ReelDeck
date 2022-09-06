import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PasswordValidator } from 'src/app/shared/validationServices/password-validator.service';



@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css'],
})
export class SingUpComponent implements OnInit {
  signUpForm!: FormGroup;
  hide = true;
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this._formBuilder.group({
      email: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    },{validator: PasswordValidator});
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get userName() {
    return this.signUpForm.get('userName');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  register() {
    this._authService.register(
      this.signUpForm.value.email,
      this.signUpForm.value.password
    );
  }

  goToLogin() {
    this._router.navigate(['/', 'login']);
  }

  // Sign In With Google
  signInWithGoogle() {
    this._authService.signInWithGoogle();
  }

  shotInfo(){
    console.log(this.signUpForm);
  }
}
