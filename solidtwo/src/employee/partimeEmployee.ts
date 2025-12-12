import { Employee, EmployeeType } from "./index";

export class PartimeEmployee extends Employee {
  constructor(name: string) {
    super(name, EmployeeType.PartTime);
  }

  calculateSalary(): number {
    return 3000;
  }
}