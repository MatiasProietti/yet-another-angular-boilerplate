import { Component, Input, Output, EventEmitter } from "@angular/core";
import { NotificationType } from "../../constants/notification-type";
import { NotificationConfig } from "../../interfaces/notification-config";

@Component({
  selector: "app-notification-content",
  templateUrl: "./notification-content.component.html",
  styleUrls: ["./notification-content.component.scss"],
})
export class NotificationContentComponent implements NotificationConfig {
  @Input() type: NotificationType = NotificationType.ERROR;
  @Input() title = "";
  @Input() text = "";
  @Input() duration = 5000;

  @Output() dismiss = new EventEmitter();

  constructor() {}

  public close(): void {
    this.dismiss.emit("Closed");
  }

  public getIcon(): string {
    if (this.type === NotificationType.ERROR) return "error";
    else if (this.type === NotificationType.WARNING) return "error";
    else if (this.type === NotificationType.SUCCESS) return "check_circle";
    else return "info";
  }
}
