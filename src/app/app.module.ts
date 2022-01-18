import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { StudentsComponent } from './students/students.component';
import { CreateStudentsComponent } from './students/create-students/create-students.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    StudentsComponent,
    CreateStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
