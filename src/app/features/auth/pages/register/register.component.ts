import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BackendError } from "@app/shared/models/backend-error";
import { FieldGroup } from "@app/shared/models/field-group";
import { FormValue } from "@app/shared/models/form-value";
import { NotificationType } from "@app/shared/modules/notification/constants/notification-type";
import { NotificationService } from "@app/shared/modules/notification/services/notification.service";
import { Validators } from "@app/shared/validators/validators";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {
  public loading = false;
  public fieldGroup = new FieldGroup([
    {
      name: "username",
      displayName: "Username",
      type: "text",
      icon: "account_box",
      autocomplete: "username",
      validators: [Validators.required, Validators.minLength(4), Validators.maxLength(128)],
    },
    {
      name: "email",
      displayName: "Email",
      type: "text",
      icon: "mail",
      autocomplete: "email",
      validators: [Validators.required, Validators.email],
    },
    {
      name: "password",
      displayName: "Password",
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
      validators: [Validators.controlsMatch("password", "confirmPassword"), Validators.required],
    },
  ]);

  constructor(private authSrv: AuthService, private router: Router, private notificationSrv: NotificationService) {}

  public onSubmit($event: FormValue): void {
    this.loading = true;
    this.authSrv
      .register($event["username"] as string, $event["email"] as string, $event["password"] as string)
      .subscribe({
        next: () => {
          this.notificationSrv.add(NotificationType.SUCCESS, "Registered successfully");
          void this.router.navigateByUrl("/auth/pending-confirmation");
        },
        error: (error: BackendError) => this.notificationSrv.add(NotificationType.ERROR, error.message),
      })
      .add(() => (this.loading = false));
  }
}
