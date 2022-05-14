import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthResendEmailPage } from './auth-resend-email.page';

const routes: Routes = [
  {
    path: '',
    component: AuthResendEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthResendEmailPageRoutingModule {}
