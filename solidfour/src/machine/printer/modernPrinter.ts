import { IPrint, IScan, IFax } from '../index';

export class ModernPrinter implements IPrint, IScan, IFax {
  print(document: string): void {
    console.log(`Printing document: ${document}`);
  }

  scan(document: string): void {
    console.log(`Scanning document: ${document}`);
  }

  fax(document: string): void {
    console.log(`Faxing document: ${document}`);
  }
}