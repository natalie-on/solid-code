import { Shape } from './shape';

export class Rectangle extends Shape {
  constructor(
    protected readonly height: number,
    protected readonly width: number
  ) {
    super();
  }

  calculateArea(): number {
    return this.height * this.width;
  }
}
