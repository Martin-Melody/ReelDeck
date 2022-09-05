import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css'],
})
export class SingUpComponent implements OnInit {
  signUpForm!: FormGroup;
  hide = true;
  constructor(private _formBuilder: FormBuilder, private _router: Router) {}

  ngOnInit(): void {
    this.signUpForm = this._formBuilder.group({
      email: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
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

  onSubmit() {
    console.log(this.signUpForm);
  }

  goToLogin(){
    this._router.navigate(['/','login'])
  }
}
