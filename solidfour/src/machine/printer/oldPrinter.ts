import { IPrint } from '../interface/print.interface';

export class OldFashionedPrinter implements IPrint {
  print(document: string): void {
    console.log(`Printing document: ${document}`);
  }
}
