import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NotificationContainerComponent } from './components/notification-container/notification-container.component';
import { NotificationContentComponent } from './components/notification-content/notification-content.component';
@NgModule({
  declarations: [NotificationContentComponent, NotificationContainerComponent],
  imports: [CommonModule, MatProgressBarModule, MatIconModule, MatButtonModule, OverlayModule],
})
export class NotificationModule {}
