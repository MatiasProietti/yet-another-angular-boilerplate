import { Random } from './random';

export class Arr {
  static randomElement<T>(array: T[]): T {
    const randomIndex = Random.integer(0, array.length - 1);
    return array[randomIndex];
  }
}
