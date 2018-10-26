import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.router';

import { AuthService } from './auth/auth.service';

import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { MainpageinfoComponent } from './mainpageinfo/mainpageinfo.component';
import { PrRecordComponent } from './pr-record/pr-record.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HeaderComponent,
    MainpageinfoComponent,
    PrRecordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
