import { PaymentProcessor } from "./paymentProcessor";

export abstract class OnlinePaymentProcessor extends PaymentProcessor {
  abstract confirmOnlinePayment(): void;
}
