import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AUTH_ROUTES } from './constants/auth.constants';
import { LoggedInGuard } from './guards/logged-in.guard';
import { LoggedOutGuard } from './guards/logged-out.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: AUTH_ROUTES.LOGIN,
        loadChildren: () => import('./pages/auth-login/auth-login.module').then((m) => m.AuthLoginPageModule),
        canLoad: [LoggedOutGuard],
        canActivate: [LoggedOutGuard],
      },
      {
        path: AUTH_ROUTES.REGISTER,
        loadChildren: () => import('./pages/auth-register/auth-register.module').then((m) => m.AuthRegisterPageModule),
        canLoad: [LoggedOutGuard],
        canActivate: [LoggedOutGuard],
      },
      {
        path: AUTH_ROUTES.FORGOT_PASSWORD,
        loadChildren: () => import('./pages/auth-forgot-password/auth-forgot-password.module').then((m) => m.AuthForgotPasswordPageModule),
        canLoad: [LoggedOutGuard],
        canActivate: [LoggedOutGuard],
      },
      {
        path: AUTH_ROUTES.RESET_PASSWORD,
        loadChildren: () => import('./pages/auth-reset-password/auth-reset-password.module').then((m) => m.AuthResetPasswordPageModule),
        canLoad: [LoggedOutGuard],
        canActivate: [LoggedOutGuard],
      },
      {
        path: AUTH_ROUTES.CONFIRM_EMAIL,
        loadChildren: () => import('./pages/auth-confirm-email/auth-confirm-email.module').then((m) => m.AuthConfirmEmailPageModule),
        canLoad: [LoggedOutGuard],
        canActivate: [LoggedOutGuard],
      },
      {
        path: AUTH_ROUTES.PENDING_CONFIRMATION,
        loadChildren: () =>
          import('./pages/auth-pending-confirmation/auth-pending-confirmation.module').then((m) => m.AuthPendingConfirmationPageModule),
        canLoad: [LoggedOutGuard],
        canActivate: [LoggedOutGuard],
      },
      {
        path: AUTH_ROUTES.RESEND_EMAIL,
        loadChildren: () => import('./pages/auth-resend-email/auth-resend-email.module').then((m) => m.AuthResendEmailPageModule),
        canLoad: [LoggedOutGuard],
        canActivate: [LoggedOutGuard],
      },
      {
        path: AUTH_ROUTES.CHANGE_PASSWORD,
        loadChildren: () => import('./pages/auth-change-password/auth-change-password.module').then((m) => m.AuthChangePasswordPageModule),
        canLoad: [LoggedInGuard],
        canActivate: [LoggedInGuard],
      },
      {
        path: '**',
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
