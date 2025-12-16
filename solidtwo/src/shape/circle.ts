import { Shape } from './shape';

export class Circle extends Shape {
  constructor(protected readonly radius: number) {
    super();
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}
