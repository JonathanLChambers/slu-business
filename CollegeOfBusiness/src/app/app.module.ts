import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';

import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core'; 
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule, Routes, Router } from '@angular/router';
import { MapComponent } from './map/map.component';
import { EventsComponent } from './events/events.component';
import { ShowFacultyComponent } from './showfaculty/showfaculty.component';
import { EditfacultyComponent } from './editfaculty/editfaculty.component';


/* const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] }
]; */

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    FacultyComponent,
    HomeComponent,
    BannerComponent,
    NavbarComponent,
    MapComponent,
    EventsComponent,
    ShowFacultyComponent,
    EditfacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    AuthenticationService, 
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
