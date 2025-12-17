import { describe, expect, test, jest, afterEach } from "@jest/globals";
import { CashPayment, CreditCardPayment, handleOnlinePayment, PayPalPayment } from "../payment/index";

describe('CreditCardPayment', () => {
  afterEach(() => {
    jest.clearAllMocks(); 
  });

  test('Should trigger confirmation during processing', () => {
    const creditCardPayment = new CreditCardPayment();
    
    const confirmSpy = jest.spyOn(creditCardPayment, 'confirmOnlinePayment');

    handleOnlinePayment(creditCardPayment, 100);

    expect(confirmSpy).toHaveBeenCalledTimes(1);
  });

  test('Should process Credit Card payment successfully', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    const creditCardPayment = new CreditCardPayment();
    handleOnlinePayment(creditCardPayment, 100); 

    expect(logSpy).toHaveBeenCalledWith('Processing credit card payment of $100');
    
    expect(logSpy).toHaveBeenCalledWith('Validating credit card details...');
    expect(logSpy).toHaveBeenCalledWith('Charging the credit card...');

    expect(logSpy).toHaveBeenCalledTimes(3);
  });
});


describe('PayPalPayment', () => {
  afterEach(() => {
    jest.clearAllMocks(); 
  });

  test('Should trigger confirmation during processing', () => {
    const payPalPayment = new PayPalPayment();
    
    const confirmSpy = jest.spyOn(payPalPayment, 'confirmOnlinePayment');

    handleOnlinePayment(payPalPayment, 200);

    expect(confirmSpy).toHaveBeenCalledTimes(1);
  });

  test('Should process PayPal payment successfully', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    const payPalPayment = new PayPalPayment();
    handleOnlinePayment(payPalPayment, 200); 

    expect(logSpy).toHaveBeenCalledWith('Processing PayPal payment of $200');

    expect(logSpy).toHaveBeenCalledWith('Redirecting to PayPal...');
    
    expect(logSpy).toHaveBeenCalledWith('Completing PayPal transaction...');

    expect(logSpy).toHaveBeenCalledTimes(3);
  });
});

describe('CashPayment', () => {
  afterEach(() => {
    jest.clearAllMocks(); 
  });

  test('Should log message and throw error', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {}); 
    
    const cashPayment = new CashPayment();

    expect(() => {
      cashPayment.processPayment(50);
    }).toThrow('Cannot process cash payment online!');

    expect(consoleSpy).toHaveBeenCalledWith('Processing cash payment of $50');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});