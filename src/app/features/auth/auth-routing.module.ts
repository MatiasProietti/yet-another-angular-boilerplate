import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { ChangePasswordComponent } from "./pages/change-password/change-password.component";
import { ConfirmEmailComponent } from "./pages/confirm-email/confirm-email.component";
import { ForgotPasswordComponent } from "./pages/forgot-password/forgot-password.component";
import { LoginComponent } from "./pages/login/login.component";
import { PendingConfirmationComponent } from "./pages/pending-confirmation/pending-confirmation.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ResendEmailComponent } from "./pages/resend-email/resend-email.component";
import { ResetPasswordComponent } from "./pages/reset-password/reset-password.component";
import { AuthGuardService as AuthGuard } from "./services/auth-guard.service";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: "login",
        component: LoginComponent,
        data: { requiredState: "logout" },
      },
      {
        path: "register",
        component: RegisterComponent,
        data: { requiredState: "logout" },
      },
      {
        path: "forgot-password",
        component: ForgotPasswordComponent,
        data: { requiredState: "logout" },
      },
      {
        path: "reset-password",
        component: ResetPasswordComponent,
        data: { requiredState: "logout" },
      },
      {
        path: "confirm-email",
        component: ConfirmEmailComponent,
        data: { requiredState: "logout" },
      },
      {
        path: "pending-confirmation",
        component: PendingConfirmationComponent,
        data: { requiredState: "logout" },
      },
      {
        path: "resend-email",
        component: ResendEmailComponent,
        data: { requiredState: "logout" },
      },
      {
        path: "change-password",
        component: ChangePasswordComponent,
        data: { requiredState: "login" },
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

//@todo: replace routes with constants
//@todo: replace "login" and "logout" with constants
