import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NotificationContainerComponent } from '../components/notification-container/notification-container.component';
import { NotificationConfig } from '../interfaces/notification-config';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private overlayRef?: OverlayRef;

  /**
   * @description BehaviorSubject of the list of notifications. Emitted when notifications are added/removed.
   * @readonly
   * @type {BehaviorSubject<NotificationConfig[]>}
   */
  public readonly notificationList$: BehaviorSubject<NotificationConfig[]> = new BehaviorSubject<NotificationConfig[]>([]);

  constructor(private overlay: Overlay) {}

  /**
   * @description List of notifications.
   * @readonly
   * @type {NotificationConfig[]}
   */
  public get notificationList(): NotificationConfig[] {
    return this.notificationList$.value;
  }

  /**
   * @description Adds a notification to the list.
   *
   * @remarks Creates the overlay and attaches the notification container when needed.
   *
   * @param {NotificationConfig} notificationConfig
   */
  public add(notificationConfig: NotificationConfig): void {
    if (!this.overlayRef) this.createOverlay();

    if (!this.overlayRef?.hasAttached()) this.attachNotificationContainer();

    this.notificationList$.next([...this.notificationList, notificationConfig]);
  }

  /**
   * @description Removes the notification passed as paramenter.
   *
   * @remarks Detaches the notification container from the overlay when the notification list is empty.
   *
   * @param {NotificationConfig} notification
   */
  public remove(notification: NotificationConfig): void {
    const filteredList = this.notificationList.filter((element: NotificationConfig) => notification !== element);
    this.notificationList$.next(filteredList);

    if (this.notificationList.length === 0) this.detachNotificationContainerIfAttached();
  }

  /**
   * @description Removes all notifications from the list.
   *
   * @remarks Detaches the notification container from the overlay.
   */
  public clear(): void {
    this.notificationList$.next([]);
    this.detachNotificationContainerIfAttached();
  }

  private createOverlay(): void {
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().bottom().right(),
    });
    this.attachNotificationContainer();
  }

  private attachNotificationContainer(): void {
    this.overlayRef?.attach(new ComponentPortal(NotificationContainerComponent));
  }

  private detachNotificationContainerIfAttached(): void {
    if (this.overlayRef?.hasAttached()) this.overlayRef?.detach();
  }
}
