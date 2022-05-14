import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthComponentsModule } from "../../components/auth.components.module";
import { AuthResendEmailPageRoutingModule } from "./auth-resend-email-routing.module";
import { AuthResendEmailPage } from "./auth-resend-email.page";

@NgModule({
  imports: [CommonModule, AuthResendEmailPageRoutingModule, AuthComponentsModule],
  declarations: [AuthResendEmailPage],
})
export class AuthResendEmailPageModule {}
