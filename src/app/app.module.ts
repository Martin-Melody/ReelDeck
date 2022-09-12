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
import { MatDialogModule } from "@angular/material/dialog";
// ....................

// Form Modules
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatChipsModule } from "@angular/material/chips";

// ....................

// Components
import { LoginComponent } from './Components/login/login.component';
import { SingUpComponent } from './Components/sing-up/sing-up.component';
import { HomeComponent } from './Components/home/home.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './Components/verify-email/verify-email.component';
// ....................

// Angular Fire
import { AngularFireModule } from "@angular/fire/compat";
// ....................

// Other
import { HttpClientModule } from "@angular/common/http";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ConfirmComponent } from './Dialog/confirm/confirm.component';
import { AlertComponent } from './Dialog/alert/alert.component';
import { DashboardComponent } from './Components/Admin/dashboard/dashboard.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BrowseComponent } from './Components/browse/browse.component';
import { CreateDeckComponent } from './Components/create-deck/create-deck.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { AuthGuardGuard } from './Guards/auth-guard.guard';
import { AuthService } from './shared/services/auth.service';
// ....................




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingUpComponent,
    HomeComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ConfirmComponent,
    AlertComponent,
    DashboardComponent,
    NavbarComponent,
    BrowseComponent,
    CreateDeckComponent,
    ProfileComponent,
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
    MatSelectModule,
    MatChipsModule,
    
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatDialogModule,
  ],
  providers: [AuthGuardGuard, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
