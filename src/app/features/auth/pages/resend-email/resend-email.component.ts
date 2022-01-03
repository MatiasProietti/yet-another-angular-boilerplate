import { Component } from "@angular/core";
import { BackendError } from "@app/shared/models/backend-error";
import { FieldGroup } from "@app/shared/models/field-group";
import { FormValue } from "@app/shared/models/form-value";
import { NotificationType } from "@app/shared/modules/notification/constants/notification-type";
import { NotificationService } from "@app/shared/modules/notification/services/notification.service";
import { Validators } from "@app/shared/validators/validators";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-resend-email",
  templateUrl: "./resend-email.component.html",
  styleUrls: ["./resend-email.component.scss"],
})
export class ResendEmailComponent {
  public loading = false;
  public fieldGroup = new FieldGroup([
    {
      name: "email",
      displayName: "Email",
      type: "text",
      icon: "mail",
      autocomplete: "email",
      validators: [Validators.required, Validators.email],
    },
  ]);

  constructor(private authSrv: AuthService, private notificationSrv: NotificationService) {}

  public onSubmit($event: FormValue): void {
    this.loading = true;
    this.authSrv
      .resendEmail($event["email"] as string)
      .subscribe({
        next: () => {
          this.notificationSrv.add(NotificationType.SUCCESS, "Verification email sent successfully");
        },
        error: (error: BackendError) => this.notificationSrv.add(NotificationType.ERROR, error.message),
      })
      .add(() => (this.loading = false));
  }
}
