import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import {RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './../../components/login/login.component';


const routes: Routes = [
    {
      path:"",
      component : LoginComponent
    }
]
@NgModule({
  declarations: [
    HomepageComponent,
    LoginComponent
  ],
  imports: [


  CommonModule,
  RouterModule.forChild(routes)
  ]
})
export class PublicModule { }
