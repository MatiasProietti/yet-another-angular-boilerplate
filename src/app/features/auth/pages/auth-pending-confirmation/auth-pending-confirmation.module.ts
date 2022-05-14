import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthComponentsModule } from "../../components/auth.components.module";
import { AuthPendingConfirmationPageRoutingModule } from "./auth-pending-confirmation-routing.module";
import { AuthPendingConfirmationPage } from "./auth-pending-confirmation.page";

@NgModule({
  imports: [CommonModule, AuthPendingConfirmationPageRoutingModule, AuthComponentsModule],
  declarations: [AuthPendingConfirmationPage],
})
export class AuthPendingConfirmationPageModule {}
