import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CallBasedOnCallComponent } from './call-based-on-call/call-based-on-call.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [AppRoutingModule, BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, CallBasedOnCallComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
