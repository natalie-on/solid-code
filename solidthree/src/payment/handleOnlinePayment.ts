import { OnlinePaymentProcessor } from "./onlinePaymentProcessor";

export function handleOnlinePayment(processor: OnlinePaymentProcessor, amount: number): void {
    processor.processPayment(amount);
}
