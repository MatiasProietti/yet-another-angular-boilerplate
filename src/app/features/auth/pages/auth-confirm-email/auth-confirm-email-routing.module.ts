import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthConfirmEmailPage } from './auth-confirm-email.page';

const routes: Routes = [
  {
    path: '',
    component: AuthConfirmEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthConfirmEmailPageRoutingModule {}
