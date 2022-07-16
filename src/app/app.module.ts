import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, routingComponents ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
