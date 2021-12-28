import { Component, Inject } from "@angular/core";
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar";
import { NotificationType } from "../../constants/notification-type";
import { NotificationConfig } from "../../interfaces/notification-config";

@Component({
  selector: "app-notification-content",
  templateUrl: "./notification-content.component.html",
  styleUrls: ["./notification-content.component.scss"],
})
export class NotificationContentComponent implements NotificationConfig {
  public type;
  public title;
  public text;
  public duration;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: NotificationConfig,
    private _snackRef: MatSnackBarRef<NotificationContentComponent>
  ) {
    this.type = data.type;
    this.title = data.title;
    this.text = data.text;
    this.duration = data.duration;
  }

  public dismiss(): void {
    this._snackRef.dismiss();
  }

  public getIcon(): string {
    if (this.type === NotificationType.ERROR) return "error";
    else if (this.type === NotificationType.WARNING) return "error";
    else if (this.type === NotificationType.SUCCESS) return "check_circle";
    else return "info";
  }
}
