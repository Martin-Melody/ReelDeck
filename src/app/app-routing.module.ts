import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/Admin/dashboard/dashboard.component';
import { BrowseComponent } from './Components/browse/browse.component';
import { CreateDeckComponent } from './Components/create-deck/create-deck.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { HomeComponent } from './Components/home/home.component';

import { LoginComponent } from './Components/login/login.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SingUpComponent } from './Components/sing-up/sing-up.component';
import { VerifyEmailComponent } from './Components/verify-email/verify-email.component';
import { ConfirmComponent } from './Dialog/confirm/confirm.component';
import { AuthGuardGuard } from './Guards/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SingUpComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuardGuard] },
  { path: 'verify', component: VerifyEmailComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuardGuard]},
  { path: 'createDeck', component:CreateDeckComponent, canActivate:[AuthGuardGuard]},
  { path: 'profile', component:ProfileComponent, canActivate:[AuthGuardGuard]},
  { path: 'browse', component:BrowseComponent, canActivate:[AuthGuardGuard]},
   { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
