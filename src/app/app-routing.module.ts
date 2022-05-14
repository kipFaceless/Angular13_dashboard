import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HomepageComponent } from './modules/public/components/homepage/homepage.component';
import {canActivate, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard'

const redirectToLogin = () => redirectUnauthorizedTo(['login'])
const redirectToHome = () => redirectLoggedInTo(['home'])

const routes: Routes = [

  {
    path : "",
    loadChildren : () => import("./modules/public/public.module").then(m=>m.PublicModule),
    ...canActivate(redirectToHome)
  },


  {
    path : "login",
    loadChildren : () => import("./modules/public/public.module").then(m=>m.PublicModule),
    ...canActivate(redirectToHome)
  },


  {
    path : '', component : DashboardComponent, children : [

  {


    path : "",
    loadChildren : () => import("./modules/dashboard/dashboard.module").then(m=>m.DashboardModule)
  },

  {
    path : "home", component :  HomepageComponent,
    ...canActivate(redirectToLogin)

  }


    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
