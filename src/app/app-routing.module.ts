import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { CreateStudentsComponent } from './students/create-students/create-students.component';

const routes: Routes = [
   { path: '', redirectTo: '/signin', pathMatch: 'full' },
{path:"signin", component:SigninComponent},
{path:"createstudentaccount", component:CreateStudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
