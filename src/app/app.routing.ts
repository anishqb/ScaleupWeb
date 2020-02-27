import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';


const routes: Routes=[
    { path:'app-login', component:LoginComponent},
    { path:'app-home', component:HomeComponent},
    { path:'app-question', component:QuestionComponent},
];

export const routing = RouterModule.forRoot(routes);