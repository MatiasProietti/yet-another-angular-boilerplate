import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { NotificationContentComponent } from "../components/notification-content/notification-content.component";
import { NotificationType } from "../constants/notification-type";
import { NotificationConfig } from "../interfaces/notification-config";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  private queue: MatSnackBarConfig<NotificationConfig>[] = [];
  constructor(private snackBar: MatSnackBar) {}

  public addNotification(type = NotificationType.ERROR, title = "Something went wrong", text = "", duration = 5000): void {
    const snackBarConfig: MatSnackBarConfig<NotificationConfig> = {
      horizontalPosition: "end",
      verticalPosition: "bottom",
      panelClass: "app-notification-container",
      data: {
        type: type,
        title: title,
        text: text,
        duration: duration,
      },
    };
    this.queue.push(snackBarConfig);

    if (!this.snackBar._openedSnackBarRef) this.openNext();
  }

  private openNext(): void {
    if (this.queue.length > 0)
      this.snackBar
        .openFromComponent(NotificationContentComponent, this.queue.shift())
        .afterDismissed()
        .subscribe(() => this.openNext());
  }
}
