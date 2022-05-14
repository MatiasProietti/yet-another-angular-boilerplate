import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthComponentsModule } from "../../components/auth.components.module";
import { AuthForgotPasswordPageRoutingModule } from "./auth-forgot-password-routing.module";
import { AuthForgotPasswordPage } from "./auth-forgot-password.page";

@NgModule({
  imports: [CommonModule, AuthForgotPasswordPageRoutingModule, AuthComponentsModule],
  declarations: [AuthForgotPasswordPage],
})
export class AuthForgotPasswordPageModule {}
