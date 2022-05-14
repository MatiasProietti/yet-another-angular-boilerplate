import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthComponentsModule } from "../../components/auth.components.module";
import { AuthLoginRoutingModule } from "./auth-login-routing.module";
import { AuthLoginPage } from "./auth-login.page";

@NgModule({
  imports: [CommonModule, AuthLoginRoutingModule, AuthComponentsModule],
  declarations: [AuthLoginPage],
})
export class AuthLoginPageModule {}
