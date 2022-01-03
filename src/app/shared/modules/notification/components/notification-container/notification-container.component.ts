import { Component } from "@angular/core";
import { notificationAnimation } from "../../constants/notification-animation";
import { NotificationConfig } from "../../interfaces/notification-config";
import { NotificationService } from "../../services/notification.service";

@Component({
  selector: "app-notification-container",
  templateUrl: "./notification-container.component.html",
  styleUrls: ["./notification-container.component.scss"],
  animations: [notificationAnimation.animationState],
})
export class NotificationContainerComponent {
  public MAX_NOTIFICATIONS = 5;
  constructor(public notificationSrv: NotificationService) {}

  public onDismiss(notification: NotificationConfig): void {
    this.notificationSrv.remove(notification);
  }
}
