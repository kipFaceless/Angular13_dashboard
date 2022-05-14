import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import {RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './../../components/login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignUpComponent } from './../../components/sign-up/sign-up.component'
//import {AppModule} from '../../app.module'


import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
const routes: Routes = [
    {
      path:"",
      component : LoginComponent,

    },
    {
      path:"sign-up",
      component : SignUpComponent,

    }
]
@NgModule({
  declarations: [
    HomepageComponent,
    LoginComponent,
    SignUpComponent,


  ],
  imports: [


    MatToolbarModule,
    MatInputModule,
    MatButtonModule,

    MatDialogModule,
    //AppModule,

  CommonModule,
  MatIconModule,
  FormsModule, ReactiveFormsModule ,
 // BrowserModule ,




  RouterModule.forChild(routes)
  ]
})
export class PublicModule { }
