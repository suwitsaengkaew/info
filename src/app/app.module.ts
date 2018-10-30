import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.router';
import { HttpModule } from '@angular/http';

import { AuthService } from './auth/auth.service';
import { AdminService } from './administrator/admin.service';

import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { MainpageinfoComponent } from './mainpageinfo/mainpageinfo.component';
import { PrRecordComponent } from './pr-record/pr-record.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { SuppliersComponent } from './administrator/suppliers/suppliers.component';
import { UnitComponent } from './administrator/unit/unit.component';
import { CurrencyComponent } from './administrator/currency/currency.component';
import { PlantComponent } from './administrator/plant/plant.component';
import { RequestComponent } from './administrator/request/request.component';
import { PrtypeComponent } from './administrator/prtype/prtype.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HeaderComponent,
    MainpageinfoComponent,
    PrRecordComponent,
    AdministratorComponent,
    SuppliersComponent,
    UnitComponent,
    CurrencyComponent,
    PlantComponent,
    RequestComponent,
    PrtypeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
