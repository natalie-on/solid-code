import { INotificationService } from "./notification.interface";

export class SendNotification {
  constructor(private readonly notificationService: INotificationService) {
  }

  sendNotification(message: string): void {
    this.notificationService.send(message);
  }
}
