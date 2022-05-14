import { Component } from "@angular/core";
import { AUTH_ROUTES } from "../../constants/auth.consts";

@Component({
  selector: "app-auth-pending-confirmation",
  templateUrl: "./auth-pending-confirmation.page.html",
  styleUrls: ["./auth-pending-confirmation.page.scss"],
})
export class AuthPendingConfirmationPage {
  public readonly resendEmailUrl = `/${AUTH_ROUTES.BASE}/${AUTH_ROUTES.RESEND_EMAIL}`;
}
