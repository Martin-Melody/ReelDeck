import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassForm!: FormGroup;
  constructor(private _formBuilder: FormBuilder, private _router: Router, private _authService:AuthService) {}

  ngOnInit(): void {
    this.forgotPassForm = this._formBuilder.group({
      email: ['', [Validators.required]],
    });
  }

  get email() {
    return this.forgotPassForm.get('email');
  }

  onSubmit(){
    this._authService.forgotPassword(this.forgotPassForm.value.email);
  }
}
