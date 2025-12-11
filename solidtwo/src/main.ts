/*=========== START PRACTICE 1 ===============*/
import { Shape, Circle, Triangle, Rectangle } from './shape/index';

let shapes: Shape[] = [
  new Circle(5),
  new Rectangle(4, 5),
  new Triangle(3)
];

const circleInstance = shapes[0];
const rectangleInstance = shapes[1];
const triangleInstance = shapes[2];

console.log(circleInstance.calculateArea());
console.log(rectangleInstance.calculateArea());
console.log(triangleInstance.calculateArea());
/*=========== END PRACTICE 1 ===============*/