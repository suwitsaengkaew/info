import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './auth/signin/signin.component';
import { MainpageinfoComponent } from './mainpageinfo/mainpageinfo.component';
import { PrRecordComponent } from './pr-record/pr-record.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { UseradminComponent } from './auth/useradmin/useradmin.component';
import { QuizadministratorComponent } from './quiz/quizadministrator/quizadministrator.component';
import { QuizmainpageComponent } from './quiz/quizmainpage/quizmainpage.component';
import { QuizresultComponent } from './quiz/quizresult/quizresult.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/quizadmin', pathMatch: 'full' },
    { path: 'signin', component: SigninComponent },
    { path: 'mainpage', component: MainpageinfoComponent },
    { path: 'prrecord', component: PrRecordComponent },
    { path: 'admin', component: AdministratorComponent },
    { path: 'useradmin', component: UseradminComponent },
    { path: 'quizadmin', component: QuizadministratorComponent },
    { path: 'quizmain', component: QuizmainpageComponent },
    { path: 'quizresult', component: QuizresultComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
