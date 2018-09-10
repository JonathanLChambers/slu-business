import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core'; 
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
