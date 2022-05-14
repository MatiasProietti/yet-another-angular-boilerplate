import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthChangePasswordPage } from './auth-change-password.page';

const routes: Routes = [
  {
    path: '',
    component: AuthChangePasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthChangePasswordPageRoutingModule {}
