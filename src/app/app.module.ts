// default imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
// ....................

// angular material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
// ....................

// Form Modules
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

// ....................

// Components
import { LoginComponent } from './Components/login/login.component';
import { SingUpComponent } from './Components/sing-up/sing-up.component';
import { HomeComponent } from './Components/home/home.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './Components/verify-email/verify-email.component';
// ....................

// Other
import { HttpClientModule } from "@angular/common/http";
// ....................


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingUpComponent,
    HomeComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatFormFieldModule,
    MatListModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
