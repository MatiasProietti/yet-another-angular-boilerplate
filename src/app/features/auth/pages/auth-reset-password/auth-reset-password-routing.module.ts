import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthResetPasswordPage } from './auth-reset-password.page';

const routes: Routes = [
  {
    path: '',
    component: AuthResetPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthResetPasswordPageRoutingModule {}
