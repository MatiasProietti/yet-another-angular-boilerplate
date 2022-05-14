import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthForgotPasswordPage } from './auth-forgot-password.page';

const routes: Routes = [
  {
    path: '',
    component: AuthForgotPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthForgotPasswordPageRoutingModule {}
