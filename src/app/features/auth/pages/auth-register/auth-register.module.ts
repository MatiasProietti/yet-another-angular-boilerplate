import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthComponentsModule } from "../../components/auth.components.module";
import { AuthRegisterPageRoutingModule } from "./auth-register-routing.module";
import { AuthRegisterPage } from "./auth-register.page";

@NgModule({
  imports: [CommonModule, AuthRegisterPageRoutingModule, AuthComponentsModule],
  declarations: [AuthRegisterPage],
})
export class AuthRegisterPageModule {}
