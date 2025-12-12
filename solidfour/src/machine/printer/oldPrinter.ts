import { Print } from '../interface/print.interface';

export class OldFashionedPrinter implements Print {
  print(document: string): void {
    console.log(`Printing document: ${document}`);
  }
}