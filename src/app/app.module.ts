import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { InstructionComponent } from './instruction/instruction.component';
import { ExamComponent } from './exam/exam.component';
import { ApiService } from './service/api.service';
import {   HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    QuestionComponent,
    InstructionComponent,
    ExamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule,
    routing,
    RouterModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
