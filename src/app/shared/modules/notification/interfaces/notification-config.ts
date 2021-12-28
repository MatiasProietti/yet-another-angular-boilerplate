import { NotificationType } from "../constants/notification-type";

export interface NotificationConfig {
  type: NotificationType;
  title?: string;
  text?: string;
  duration: number;
}
