import { EmployeeType } from "./index";

export abstract class Employee {
  constructor(public name: string, public type: EmployeeType) { 
  }

  abstract calculateSalary(): number;
}
