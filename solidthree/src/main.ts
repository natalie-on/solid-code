import { CreditCardPayment, PayPalPayment, CashPayment, handleOnlinePayment } from "./payment/index";

const creditCardPayment = new CreditCardPayment();
handleOnlinePayment(creditCardPayment, 100); // Output: Processed payment successfully

const payPalPayment = new PayPalPayment();
handleOnlinePayment(payPalPayment, 200); // Output: Processed payment successfully

const cashPayment = new CashPayment();
cashPayment.processPayment(50);
