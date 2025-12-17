import { PaymentProcessor } from "./paymentProcessor";

export class CashPayment extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing cash payment of $${amount}`);
    throw new Error("Cannot process cash payment online!");
  }
}
