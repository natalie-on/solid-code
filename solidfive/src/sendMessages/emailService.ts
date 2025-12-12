import { INotificationService } from "./notification.interface";

export class EmailService implements INotificationService {
  send(message: string): void {
    console.log(`Sending email with message: ${message}`);
  }
}
