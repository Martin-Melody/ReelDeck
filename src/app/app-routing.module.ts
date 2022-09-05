import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { HomeComponent } from './Components/home/home.component';

import { LoginComponent } from './Components/login/login.component';
import { SingUpComponent } from './Components/sing-up/sing-up.component';
import { VerifyEmailComponent } from './Components/verify-email/verify-email.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SingUpComponent},
  {path:"forgotpassword", component:ForgotPasswordComponent},
  {path:"home", component:HomeComponent},
  {path:"verify", component:VerifyEmailComponent},
  {path:"**",redirectTo:"login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
