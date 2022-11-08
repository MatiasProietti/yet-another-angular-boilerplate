import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { notificationAnimation } from '../../constants/notification-animation';
import { NOTIFICATION_DEFAULTS } from '../../constants/notification-defaults';
import { NotificationConfig } from '../../interfaces/notification-config';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification-container',
  templateUrl: './notification-container.component.html',
  styleUrls: ['./notification-container.component.scss'],
  animations: [notificationAnimation.animationState],
})
export class NotificationContainerComponent implements OnDestroy {
  private onDestroy$: Subject<void> = new Subject();
  public readonly MAX_NOTIFICATION_SHOWN = NOTIFICATION_DEFAULTS.MAX_NOTIFICATION_SHOWN;
  public notificationList: NotificationConfig[] = [];

  constructor(public notificationSrv: NotificationService) {
    this.listenListChangesAndUpdateLocalList();
  }

  public onDismiss(notification: NotificationConfig): void {
    this.notificationSrv.remove(notification);
  }

  private listenListChangesAndUpdateLocalList(): void {
    this.notificationSrv.notificationList$.pipe(takeUntil(this.onDestroy$)).subscribe((newNotificationList: NotificationConfig[]) => {
      this.notificationList = newNotificationList;
    });
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
