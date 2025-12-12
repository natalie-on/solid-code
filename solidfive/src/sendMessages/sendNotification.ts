import { INotificationService } from "./notification.interface";

export class SendNotification {
  private notificationService: INotificationService;

  constructor(service: INotificationService) {
    this.notificationService = service;
  }

  sendNotification(message: string): void {
    this.notificationService.send(message);
  }
}
