import { INotificationService } from "./notification.interface";

export class SmsService implements INotificationService {
  send(message: string): void {
    console.log(`Sending SMS with message: ${message}`);
  }
}
