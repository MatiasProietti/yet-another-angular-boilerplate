import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthRegisterPage } from './auth-register.page';

const routes: Routes = [
  {
    path: '',
    component: AuthRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRegisterPageRoutingModule {}
