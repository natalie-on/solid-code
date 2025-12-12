import { ModernPrinter, OldFashionedPrinter } from "./machine";

const oldPrinter = new OldFashionedPrinter();
oldPrinter.print("Document 1");

const modernPrinter = new ModernPrinter();
modernPrinter.print("Document 2");
modernPrinter.scan("Document 3");
modernPrinter.fax("Document 4");
