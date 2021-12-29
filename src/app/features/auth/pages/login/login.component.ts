import { Component } from "@angular/core";
import { BackendError } from "@app/shared/models/backend-error";
import { FieldGroup } from "@app/shared/models/field-group";
import { FormValue } from "@app/shared/models/form-value";
import { NotificationType } from "@app/shared/modules/notification/constants/notification-type";
import { NotificationService } from "@app/shared/modules/notification/services/notification.service";
import { Validators } from "@app/shared/validators/validators";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-auth-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  public loading = false;
  public fieldGroup = new FieldGroup([
    {
      name: "username",
      displayName: "Username",
      type: "text",
      icon: "account_box",
      autocomplete: "username",
      validators: [Validators.required],
    },
    {
      name: "password",
      displayName: "Password",
      type: "password",
      icon: "vpn_key",
      autocomplete: "current-password",
      validators: [Validators.required],
    },
  ]);
  constructor(private authSrv: AuthService, private notificationSrv: NotificationService) {}

  public onSubmit($event: FormValue): void {
    this.loading = true;
    this.authSrv
      .login($event["username"] as string, $event["password"] as string, $event["rememberMe"] as boolean)
      .subscribe({
        next: () => {
          this.notificationSrv.addNotification(NotificationType.SUCCESS, "Logged in successfully");
        },
        error: (error: BackendError) => this.notificationSrv.addNotification(NotificationType.ERROR, error.message),
      })
      .add(() => (this.loading = false));
  }
}
