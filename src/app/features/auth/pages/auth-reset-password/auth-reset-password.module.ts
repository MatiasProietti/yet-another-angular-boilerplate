import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthComponentsModule } from "../../components/auth.components.module";
import { AuthResetPasswordPageRoutingModule } from "./auth-reset-password-routing.module";
import { AuthResetPasswordPage } from "./auth-reset-password.page";

@NgModule({
  imports: [CommonModule, AuthResetPasswordPageRoutingModule, AuthComponentsModule],
  declarations: [AuthResetPasswordPage],
})
export class AuthResetPasswordPageModule {}
