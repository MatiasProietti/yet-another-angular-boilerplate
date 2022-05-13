import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BackendError } from "@app/shared/models/backend-error";
import { FieldGroup } from "@app/shared/models/field-group";
import { FormValue } from "@app/shared/models/form-value";
import { NotificationType } from "@app/shared/modules/notification/constants/notification-type";
import { NotificationService } from "@app/shared/modules/notification/services/notification.service";
import { Validators } from "@app/shared/validators/validators";
import { AUTH_ROUTES } from "../../constants/auth.consts";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"],
})
export class ChangePasswordComponent {
  public loading = false;
  public fieldGroup = new FieldGroup([
    //fake username input needed to trigger chrome's password suggestion
    {
      name: "username",
      displayName: "Username",
      type: "text",
      icon: "account_box",
      hidden: true,
      autocomplete: "username",
    },
    {
      name: "oldPassword",
      displayName: "Current Password",
      type: "password",
      icon: "vpn_key",
      autocomplete: "current-password",
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(128)],
    },
    {
      name: "newPassword",
      displayName: "New Password",
      type: "password",
      icon: "vpn_key",
      autocomplete: "new-password",
      validators: [Validators.required, Validators.minLength(8), Validators.maxLength(128)],
    },
    {
      name: "confirmPassword",
      displayName: "Confirm Password",
      type: "password",
      icon: "vpn_key",
      autocomplete: "new-password",
      validators: [Validators.controlsMatch("newPassword", "confirmPassword"), Validators.required],
    },
  ]);
  constructor(private authSrv: AuthService, private router: Router, private notificationSrv: NotificationService) {}

  public onSubmit($event: FormValue): void {
    this.loading = true;
    this.authSrv
      .changePassword($event["oldPassword"] as string, $event["newPassword"] as string)
      .subscribe({
        next: () => {
          this.notificationSrv.add(NotificationType.SUCCESS, "Password changed successfully");
          void this.router.navigate([AUTH_ROUTES.BASE, AUTH_ROUTES.LOGIN]);
        },
        error: (error: BackendError) => this.notificationSrv.add(NotificationType.ERROR, error.message),
      })
      .add(() => (this.loading = false));
  }
}

//@todo: add default username from accountSrv
