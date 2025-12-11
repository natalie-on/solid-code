import { EmployeeType } from "./employeeType";

export abstract class CalculateSalary {
  type: EmployeeType;

  constructor(type: EmployeeType) {
    this.type = type;
  }

  abstract calculateSalary(): number;
}