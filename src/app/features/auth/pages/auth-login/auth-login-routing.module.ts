import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthLoginPage } from "./auth-login.page";

const routes: Routes = [
  {
    path: "",
    component: AuthLoginPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthLoginRoutingModule {}
