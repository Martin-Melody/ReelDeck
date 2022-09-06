import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hide = true;
  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _authSerivce: AuthService,
    private _dialogService: DialogService
  ) {}

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

  // Login Method
  Login() {
    this._authSerivce.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    );
  }

  goToForgotPassword() {
    this._router.navigate(['/', 'forgotpassword']);
  }

  goToSignUp() {
    this._router.navigate(['/', 'signup']);
  }

  yesNoDialog() {
    this._dialogService.confirmDialog({
      title: 'Are you sure',
      message: ' Are you sure you want to do this?',
      confirmText: 'yes',
      cancelText: 'No',
    });
  }

  confirmCancel() {
    this._dialogService.confirmDialog({
      title: 'Please confrim action',
      message: 'Please confirm whether you want to do this',
      confirmText: 'Confirm',
      cancelText: 'Cancel',
    });
  }

  yesNotSure() {
    this._dialogService.confirmDialog({
      title: 'Are you sure',
      message: ' Are you sure you want to do this?',
      confirmText: 'yes',
      cancelText: 'Not Sure',
    });
  }
}
