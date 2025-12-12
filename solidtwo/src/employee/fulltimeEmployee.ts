import { Employee, EmployeeType } from "./index";

export class FulltimeEmployee extends Employee {
  constructor(name: string) {
    super(name, EmployeeType.FullTime);
  }

  calculateSalary(): number {
    return 5000;
  }
}