import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthComponentsModule } from "../../components/auth.components.module";
import { AuthChangePasswordPageRoutingModule } from "./auth-change-password-routing.module";
import { AuthChangePasswordPage } from "./auth-change-password.page";

@NgModule({
  imports: [CommonModule, AuthChangePasswordPageRoutingModule, AuthComponentsModule],
  declarations: [AuthChangePasswordPage],
})
export class AuthChangePasswordPageModule {}
