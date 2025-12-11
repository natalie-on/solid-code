import { FulltimeEmployee, InternEmployee, PartimeEmployee } from '../employee/index';
import { Circle, Rectangle, Triangle } from '../shape/index';
import { describe, expect, test } from '@jest/globals';

/*=========== START PRACTICE 1 ===============*/
describe('Circle', () => {
  test('should calculate area correctly', () => {
    const radius = 2;
    const circle = new Circle(radius);

    const area = circle.calculateArea();

    expect(area).toBeCloseTo(Math.PI * radius * radius);
  });
});

describe('Rectangle', () => {
  test('should calculate area correctly', () => {
    const height = 3;
    const width = 4;
    const rectangle = new Rectangle(height, width);

    const area = rectangle.calculateArea();

    expect(area).toBe(height * width);
  });
});

describe('Triangle', () => {
  test('should calculate area correctly', () => {
    const length = 5;
    const triangle = new Triangle(length);

    const area = triangle.calculateArea();

    expect(area).toBe(0.5 * length * length);
  });
});
/*=========== END PRACTICE 1 ===============*/

/*=========== START PRACTICE 2 ===============*/
describe('FulltimeEmployee', () => {
  test('Should calculate salary successfully', () => {
    const name = 'Alice';
    const fulltimeEmployee = new FulltimeEmployee(name);

    expect(fulltimeEmployee.calculateSalary()).toBe(5000);
  })
});

describe('PartimeEmployee', () => {
  test('Should calculate salary successfully', () => {
    const name = 'Bob';
    const partimeEmployee = new PartimeEmployee(name);

    expect(partimeEmployee.calculateSalary()).toBe(3000);
  })
});

describe('InternEmployee', () => {
  test('Should calculate salary successfully', () => {
    const name = 'Cris';
    const internEmployee = new InternEmployee(name);

    expect(internEmployee.calculateSalary()).toBe(1000);
  })
});
/*=========== END PRACTICE 2 ===============*/
