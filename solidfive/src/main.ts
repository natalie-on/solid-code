import { EmailService, SmsService, SendNotification } from "./sendMessages/index";

const emailService = new EmailService();
const app1 = new SendNotification(emailService);
app1.sendNotification("Hello, this is a notification send via email!"); 

const smsService = new SmsService();
const app2 = new SendNotification(smsService);
app2.sendNotification("Hello, this is a notification send via SMS!");
