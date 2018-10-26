import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './auth/signin/signin.component';
import { MainpageinfoComponent } from './mainpageinfo/mainpageinfo.component';
import { PrRecordComponent } from './pr-record/pr-record.component';
import { AdministratorComponent } from './administrator/administrator.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/prrecord', pathMatch: 'full' },
    { path: 'signin', component: SigninComponent },
    { path: 'mainpage', component: MainpageinfoComponent },
    { path: 'prrecord', component: PrRecordComponent },
    { path: 'admin', component: AdministratorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
