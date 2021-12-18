import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { ConfirmEmailComponent } from "./pages/confirm-email/confirm-email.component";
import { ForgotPasswordComponent } from "./pages/forgot-password/forgot-password.component";
import { LoginComponent } from "./pages/login/login.component";
import { PendingConfirmationComponent } from "./pages/pending-confirmation/pending-confirmation.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ResetPasswordComponent } from "./pages/reset-password/reset-password.component";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "register",
        component: RegisterComponent,
      },
      {
        path: "forgot-password",
        component: ForgotPasswordComponent,
      },
      {
        path: "reset-password",
        component: ResetPasswordComponent,
      },
      {
        path: "confirm-email",
        component: ConfirmEmailComponent,
      },
      {
        path: "pending-confirmation",
        component: PendingConfirmationComponent,
      },
      {
        path: "**",
        redirectTo: "login",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
