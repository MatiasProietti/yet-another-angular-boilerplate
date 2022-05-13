import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AUTH_ROUTES } from "./constants/auth.consts";
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
        path: AUTH_ROUTES.LOGIN,
        component: LoginComponent,
        data: { requiredState: "logout" },
      },
      {
        path: AUTH_ROUTES.REGISTER,
        component: RegisterComponent,
        data: { requiredState: "logout" },
      },
      {
        path: AUTH_ROUTES.FORGOT_PASSWORD,
        component: ForgotPasswordComponent,
        data: { requiredState: "logout" },
      },
      {
        path: AUTH_ROUTES.RESET_PASSWORD,
        component: ResetPasswordComponent,
        data: { requiredState: "logout" },
      },
      {
        path: AUTH_ROUTES.CONFIRM_EMAIL,
        component: ConfirmEmailComponent,
        data: { requiredState: "logout" },
      },
      {
        path: AUTH_ROUTES.PENDING_CONFIRMATION,
        component: PendingConfirmationComponent,
        data: { requiredState: "logout" },
      },
      {
        path: AUTH_ROUTES.RESEND_EMAIL,
        component: ResendEmailComponent,
        data: { requiredState: "logout" },
      },
      {
        path: AUTH_ROUTES.CHANGE_PASSWORD,
        component: ChangePasswordComponent,
        data: { requiredState: "login" },
      },
      {
        path: "**",
        redirectTo: AUTH_ROUTES.LOGIN,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

//@todo: replace "login" and "logout" with constants
