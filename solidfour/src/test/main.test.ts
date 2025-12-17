import { describe, expect, test, jest } from '@jest/globals'
import { ModernPrinter, OldFashionedPrinter } from '../machine/index';

const documentName = 'Document';

describe('OldFashionedPrinter', () => {
  test('Should print the document successfully', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    const oldPrinter = new OldFashionedPrinter();

    oldPrinter.print(documentName);

    expect(logSpy).toHaveBeenCalledWith(`Printing document: ${documentName}`);
  });
});

describe('ModernPrinter', () => {
  afterEach(() => {
    jest.clearAllMocks(); 
  });

  test('Should print the document successfully', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    const modernPrinter = new ModernPrinter();
    
    modernPrinter.print(documentName);

    expect(logSpy).toHaveBeenCalledWith(`Printing document: ${documentName}`);
  });

  test('Should scan the document successfully', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    const modernPrinter = new ModernPrinter();
    
    modernPrinter.scan(documentName);

    expect(logSpy).toHaveBeenCalledWith(`Scanning document: ${documentName}`);
    });

  test('Should fax the document successfully', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    const modernPrinter = new ModernPrinter();
    
    modernPrinter.fax(documentName);

    expect(logSpy).toHaveBeenCalledWith(`Faxing document: ${documentName}`);
  });

});
