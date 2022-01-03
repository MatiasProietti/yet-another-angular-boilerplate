import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotificationContentComponent } from "./components/notification-content/notification-content.component";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { OverlayModule } from "@angular/cdk/overlay";
import { NotificationContainerComponent } from "./components/notification-container/notification-container.component";
@NgModule({
  declarations: [NotificationContentComponent, NotificationContainerComponent],
  imports: [CommonModule, MatProgressBarModule, MatIconModule, MatButtonModule, OverlayModule],
})
export class NotificationModule {}
