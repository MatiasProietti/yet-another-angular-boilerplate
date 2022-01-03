import { Random } from "./random";

export class Arr {
  static removeElement<T>(array: T[], element: T): T[] {
    return array.splice(
      array.findIndex((arrElement) => arrElement === element),
      1
    );
  }

  static randomElement<T>(array: T[]): T {
    const randomIndex = Random.integer(0, array.length - 1);
    return array[randomIndex];
  }
}
