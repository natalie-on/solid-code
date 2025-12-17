import { Shape } from './shape';

export class Triangle extends Shape {
  constructor(protected readonly length: number) {
    super();
  }

  calculateArea(): number {
    return 0.5 * this.length * this.length;
  }
}
