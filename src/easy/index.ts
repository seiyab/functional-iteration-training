export function lowerAll(input: string[]): string[] {
  const output = [];
  for (const element of input) {
    output.push(element.toLowerCase());
  }
  return output;
}

export function firstElementOver5(input: number[]): number | undefined {
  for (const element of input) {
    if (element > 5) {
      return element;
    }
  }
  return undefined;
}

export function allElementsArePositive(input: number[]): boolean {
  for (const element of input) {
    if (element <= 0) {
      return false;
    }
  }
  return true;
}