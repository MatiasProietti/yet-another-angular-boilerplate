import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BackendError } from "@app/shared/models/backend-error";
import { FieldGroup } from "@app/shared/models/field-group";
import { NotificationType } from "@app/shared/modules/notification/constants/notification-type";
import { NotificationService } from "@app/shared/modules/notification/services/notification.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-confirm-email",
  templateUrl: "./confirm-email.component.html",
  styleUrls: ["./confirm-email.component.scss"],
})
export class ConfirmEmailComponent {
  public loading = false;
  public fieldGroup = new FieldGroup([]);
  public id = 0;
  public hash = "";
  public expires = "";
  public signature = "";
  constructor(
    private activatedRoute: ActivatedRoute,
    private authSrv: AuthService,
    private router: Router,
    private notificationSrv: NotificationService
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.id = params["id"] as number;
      this.hash = params["hash"] as string;
      this.expires = params["expires"] as string;
      this.signature = params["signature"] as string;
    });
  }

  public onSubmit(): void {
    this.loading = true;
    if (!this.id || !this.hash || !this.expires || !this.signature) return;

    this.authSrv
      .confirmEmail(this.id, this.hash, this.expires, this.signature)
      .subscribe({
        next: () => {
          this.notificationSrv.add(NotificationType.SUCCESS, "Email confirmed successfully");
          void this.router.navigateByUrl("/auth/login");
        },
        error: (error: BackendError) => this.notificationSrv.add(NotificationType.ERROR, error.message),
      })
      .add(() => (this.loading = false));
  }
}
