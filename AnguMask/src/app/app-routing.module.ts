import { FirstPageComponent } from './first-page/first-page.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModaleComponent } from './login-modale/login-modale.component';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: FirstPageComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home/login',
    pathMatch: 'full',
    component: LoginModaleComponent
  }
];

@NgModule({
  declarations: [
    FirstPageComponent,
    LoginModaleComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
