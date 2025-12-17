import { OnlinePaymentProcessor } from "./onlinePaymentProcessor";

export class CreditCardPayment extends OnlinePaymentProcessor {
  confirmOnlinePayment(): void {
    console.log("Validating credit card details...");
    console.log("Charging the credit card...");
  }

  processPayment(amount: number): void {
    console.log(`Processing credit card payment of $${amount}`);
    this.confirmOnlinePayment();
  }
}
