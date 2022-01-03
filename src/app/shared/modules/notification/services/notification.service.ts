import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { Injectable } from "@angular/core";
import { Arr } from "@app/shared/utils/arr";
import { NotificationContainerComponent } from "../components/notification-container/notification-container.component";
import { NotificationType } from "../constants/notification-type";
import { NotificationConfig } from "../interfaces/notification-config";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  public notificationList: NotificationConfig[] = [];
  public overlayRef?: OverlayRef;
  constructor(private overlay: Overlay) {}

  public add(type = NotificationType.ERROR, title = "Something went wrong", text = "", duration = 5000): void {
    if (!this.overlayRef) this.createOverlay();
    const notificationConfig: NotificationConfig = {
      type: type,
      title: title,
      text: text,
      duration: duration,
    };
    this.notificationList.push(notificationConfig);
  }

  public remove(notification: NotificationConfig): void {
    Arr.removeElement(this.notificationList, notification);
  }

  public clear(): void {
    this.notificationList = [];
  }

  private createOverlay(): void {
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().bottom().right(),
    });
    this.overlayRef.attach(new ComponentPortal(NotificationContainerComponent));
  }
}
