import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthComponentsModule } from "../../components/auth.components.module";
import { AuthConfirmEmailPageRoutingModule } from "./auth-confirm-email-routing.module";
import { AuthConfirmEmailPage } from "./auth-confirm-email.page";

@NgModule({
  imports: [CommonModule, AuthConfirmEmailPageRoutingModule, AuthComponentsModule],
  declarations: [AuthConfirmEmailPage],
})
export class AuthConfirmEmailPageModule {}
