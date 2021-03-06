import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.router';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './auth/auth.service';
import { AdminService } from './administrator/admin.service';
import { PrRecordService } from './pr-record/pr-record.service';

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
import { UseradminComponent } from './auth/useradmin/useradmin.component';
import { QuizadministratorComponent } from './quiz/quizadministrator/quizadministrator.component';
import { QuizmainpageComponent } from './quiz/quizmainpage/quizmainpage.component';
import { QuizresultComponent } from './quiz/quizresult/quizresult.component';


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
    PrtypeComponent,
    UseradminComponent,
    QuizadministratorComponent,
    QuizmainpageComponent,
    QuizresultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, AdminService, PrRecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
