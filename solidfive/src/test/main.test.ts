import { describe, expect, test, jest, afterEach } from "@jest/globals";
import { EmailService, SmsService, SendNotification } from "../sendMessages/index";

describe('Notification System Tests', () => {
  const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('EmailService should log the correct email message', () => {
    const emailService = new EmailService();
    const message = "Welcome User";

    emailService.send(message);

    expect(logSpy).toHaveBeenCalledWith(`Sending email with message: ${message}`);
    expect(logSpy).toHaveBeenCalledTimes(1);
  });

  test('SmsService should log the correct SMS message', () => {
    const smsService = new SmsService();
    const message = "Your code is 1234";

    smsService.send(message);

    expect(logSpy).toHaveBeenCalledWith(`Sending SMS with message: ${message}`);
    expect(logSpy).toHaveBeenCalledTimes(1);
  });

  test('SendNotification should call the injected service successfully', () => {
    const mockService = {
      send: jest.fn()
    };

    const notificationSender = new SendNotification(mockService);
    const message = "Hello from the app";

    notificationSender.sendNotification(message);

    expect(mockService.send).toHaveBeenCalledWith(message);
    expect(mockService.send).toHaveBeenCalledTimes(1);
  });
});
