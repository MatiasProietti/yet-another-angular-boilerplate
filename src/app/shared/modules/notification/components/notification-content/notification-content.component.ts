import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, ViewEncapsulation } from '@angular/core';
import { NOTIFICATION_DEFAULTS } from '../../constants/notification-defaults';
import { NotificationType } from '../../constants/notification-type';

@Component({
  selector: 'app-notification-content',
  templateUrl: './notification-content.component.html',
  styleUrls: ['./notification-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationContentComponent {
  @HostBinding() class = 'app-notification-content';

  public icon!: string;
  public iconClass!: string;
  public _type!: NotificationType;
  public _duration!: string;

  @Input() title: string = '';
  @Input() text?: string;
  @Input() set duration(duration: string | undefined) {
    this._duration = (duration ?? NOTIFICATION_DEFAULTS.DURATION) + 'ms';
  }

  @Input() set type(type: NotificationType) {
    this._type = type;
    this.icon = this.getIcon();
    this.iconClass = this.getIconClass();
  }

  /**
   * @description Emitted when the user clicks on the close button or the timer runs out
   */
  @Output() dismiss = new EventEmitter();

  public close(): void {
    this.dismiss.emit();
  }

  private getIcon(): string {
    switch (this._type) {
      case NotificationType.ERROR:
      case NotificationType.WARNING:
        return 'error';
      case NotificationType.SUCCESS:
        return 'check_circle';
      case NotificationType.INFO:
        return 'info';
    }
  }

  private getIconClass(): string {
    return this._type;
  }
}
