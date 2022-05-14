import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BackendError } from "@app/shared/models/backend-error";
import { FormFieldGroup } from "@app/shared/models/form-field-group";
import { FormValue } from "@app/shared/models/form-value";
import { NotificationType } from "@app/shared/modules/notification/constants/notification-type";
import { NotificationService } from "@app/shared/modules/notification/services/notification.service";
import { Validators } from "@app/shared/validators/validators";
import { AUTH_ROUTES } from "../../constants/auth.consts";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-auth-forgot-password",
  templateUrl: "./auth-forgot-password.page.html",
  styleUrls: ["./auth-forgot-password.page.scss"],
})
export class AuthForgotPasswordPage {
  public readonly loginUrl = `/${AUTH_ROUTES.BASE}/${AUTH_ROUTES.LOGIN}`;
  public loading = false;
  public fieldGroup = new FormFieldGroup([
    {
      name: "email",
      displayName: "Email",
      type: "text",
      icon: "mail",
      autocomplete: "email",
      validators: [Validators.required, Validators.email],
    },
  ]);
  constructor(private authSrv: AuthService, private router: Router, private notificationSrv: NotificationService) {}

  public onSubmit($event: FormValue): void {
    this.loading = true;
    this.authSrv
      .forgotPassword($event["email"] as string)
      .subscribe({
        next: () => {
          this.notificationSrv.add(NotificationType.SUCCESS, "Recovery email sent successfully");
          void this.router.navigate([AUTH_ROUTES.BASE, AUTH_ROUTES.LOGIN]);
        },
        error: (error: BackendError) => this.notificationSrv.add(NotificationType.ERROR, error.message),
      })
      .add(() => (this.loading = false));
  }
}
