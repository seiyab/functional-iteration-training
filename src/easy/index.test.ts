import {
  sum,
  lowerAll,
  firstElementOver5,
  allElementsArePositive,
} from '.';

describe('sum', () => {
  it('should return sum of elements', () => {
    const originalInput = [0, 1, 2, 3, 4];
    const input = [...originalInput];
    const result = sum(input);
    expect(result).toBe(10);
    expect(input).toEqual(originalInput);
  });

  it('should return 0 for an empty array', () => {
    const input: number[] = [];
    const result = sum(input);
    expect(result).toBe(0);
    expect(input).toEqual([]);
  });
});

describe('lowerAll', () => {
  it('should return lower cases', () => {
    const originalInput = [
      'APPLE',
      'Banana',
      'orange',
    ];
    const input = [...originalInput];
    const result = lowerAll(input);
    const expected = [
      'apple',
      'banana',
      'orange',
    ];
    expect(result).toEqual(expected);
    expect(input).toEqual(originalInput);
  });

  it('should work for an empty array', () => {
    const input: string[] = [];
    const result = lowerAll(input);
    expect(result).toEqual([]);
    expect(input).toEqual([]);
  });
});

describe('firstElementOver5', () => {
  it('should find 6', () => {
    const originalInput = [0, 5, 3, 6, 2, 8];
    const input = [...originalInput];
    const result = firstElementOver5(input);
    expect(result).toBe(6);
    expect(input).toEqual(originalInput);
  });

  it('should return undefined if no elements are greater than 5', () => {
    const originalInput = [0, 1, 2, 5, 5, 5];
    const input = [...originalInput];
    const result = firstElementOver5(input);
    expect(result).toBeUndefined();
    expect(input).toEqual(originalInput);
  });

  it('should return undefined for an empty array', () => {
    const input: number[] = [];
    const result = firstElementOver5(input);
    expect(result).toBeUndefined();
    expect(input).toEqual([]);
  });
});

describe('allElementsArePositive', () => {
  it('should return true if all elements are positive', () => {
    const originalInput = [1, 2, 3, 4];
    const input = [...originalInput];
    const result = allElementsArePositive(input);
    expect(result).toBe(true);
    expect(input).toEqual(originalInput);
  });

  it('should return false if negative number exists', () => {
    const originalInput = [1, -2, 3, 4];
    const input = [...originalInput];
    const result = allElementsArePositive(input);
    expect(result).toBe(false);
    expect(input).toEqual(originalInput);
  });

  it('should return true for an empty array (remember de morgan\'s laws)', () => {
    const input: number[] = [];
    const result = allElementsArePositive(input);
    expect(result).toBe(true);
    expect(input).toEqual([]);
  });
});
