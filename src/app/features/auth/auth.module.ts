import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./pages/login/login.component";
import { AuthCardComponent } from "./components/auth-card/auth-card.component";
import { AuthComponent } from "./auth.component";
import { RegisterComponent } from "./pages/register/register.component";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthFormComponent } from "./components/auth-form/auth-form.component";
import { ForgotPasswordComponent } from "./pages/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./pages/reset-password/reset-password.component";
import { ConfirmEmailComponent } from "./pages/confirm-email/confirm-email.component";
import { SharedComponentsModule } from "@app/shared/components/shared.components.module";
import { PendingConfirmationComponent } from './pages/pending-confirmation/pending-confirmation.component';
import { ResendEmailComponent } from './pages/resend-email/resend-email.component';

@NgModule({
  declarations: [
    LoginComponent,
    AuthCardComponent,
    AuthComponent,
    RegisterComponent,
    AuthFormComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ConfirmEmailComponent,
    PendingConfirmationComponent,
    ResendEmailComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatDividerModule,
    SharedComponentsModule,
  ],
})
export class AuthModule {}
