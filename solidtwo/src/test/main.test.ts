import { Circle, Rectangle, Triangle } from '../shape/index';
import { describe, expect, test } from '@jest/globals';

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
