/*=========== START PRACTICE 1 ===============*/
import { Shape, Circle, Triangle, Rectangle } from './shape/index';

const shapes: Shape[] = [
  new Circle(5),
  new Rectangle(4, 5),
  new Triangle(3)
];

const circleInstance = shapes[0];
const rectangleInstance = shapes[1];
const triangleInstance = shapes[2];

console.log('Start Practice 1!')
console.log(circleInstance.calculateArea());
console.log(rectangleInstance.calculateArea());
console.log(triangleInstance.calculateArea());
console.log('End Practice 1!')
/*=========== END PRACTICE 1 ===============*/

/*=========== START PRACTICE 2 ===============*/
import { FulltimeEmployee, InternEmployee, PartimeEmployee } from './employee/index';

console.log('\nStart Practice 2!')
const fullTimeEmployee = new FulltimeEmployee("Alice");

console.log(`${fullTimeEmployee.name}'s salary is ${fullTimeEmployee.calculateSalary()}`);

const partimeEmployee = new PartimeEmployee("Bob");

console.log(`${partimeEmployee.name}'s salary is ${partimeEmployee.calculateSalary()}`);

const internEmployee = new InternEmployee("Cris");

console.log(`${internEmployee.name}'s salary is ${internEmployee.calculateSalary()}`);
console.log('End Practice 2!')
/*=========== END PRACTICE 2 ===============*/
