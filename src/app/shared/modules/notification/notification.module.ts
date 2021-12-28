import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotificationContentComponent } from "./components/notification-content/notification-content.component";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  declarations: [NotificationContentComponent],
  imports: [CommonModule, MatProgressBarModule, MatIconModule, MatButtonModule, MatSnackBarModule],
})
export class NotificationModule {}
