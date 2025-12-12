import { Employee, EmployeeType } from "./index";

export class InternEmployee extends Employee {
  constructor(name: string) {
    super(name, EmployeeType.Intern);
  }

  calculateSalary(): number {
    return 1000;
  }
}