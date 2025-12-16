import { OnlinePaymentProcessor } from "./onlinePaymentProcessor";

export class PayPalPayment extends OnlinePaymentProcessor {
  confirmOnlinePayment(): void {
    console.log("Redirecting to PayPal...");
    console.log("Completing PayPal transaction...");
  }

  processPayment(amount: number): void {
    console.log(`Processing PayPal payment of $${amount}`);
    this.confirmOnlinePayment();
  }
}
