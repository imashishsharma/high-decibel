import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import '../assets/js/agency.min.js';
// import '../vendor/jquery/jquery.min.js';
// import '../vendor/jquery-easing/jquery.easing.min.js';
// import '../assets/js/jqBootstrapValidation.js';
// import '../assets/js/contact_me.js';
// import '../vendor/bootstrap/js/bootstrap.bundle.min.js';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
