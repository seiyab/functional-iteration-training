import {
  sequentiallyApplyAsyncFunctions,
  takeWhile,
  getFirstOneByNestedArray,
} from '.';

describe('sequentiallyApplyAsyncFunctions', () => {
  const genFunc = (n: number) => (x: number): Promise<number> => Promise.resolve(n + x);

  it('should work', async () => {
    const funcs = [1, 2, 3, 4].map(genFunc);
    const result = await sequentiallyApplyAsyncFunctions(funcs, 0);
    expect(result).toBe(10);
  });

  it('should work for empty array', async () => {
    const result = await sequentiallyApplyAsyncFunctions([], 'foo');
    expect(result).toBe('foo');
  });
});

describe('takeWhile', () => {
  it('should work', () => {
    const result = takeWhile((x: number) => x < 3, [0, 1, 2, 3, 4, 5, 1, 2, 3]);
    expect(result).toEqual([0, 1, 2]);
  });

  it('should work for empty array', () => {
    const result = takeWhile(() => true, []);
    expect(result).toEqual([]);
  });

  it('should work even if first element does not suit', () => {
    const result = takeWhile((s: string) => s.startsWith('foo'), ['bar', 'foo baz']);
    expect(result).toEqual([]);
  });
});

describe('getFirstOneNestedArray', () => {
  it('should work', () => {
    const obj = {
      foo: 1,
      bar: 2,
      baz: 3,
    };
    const keyss = [['apple', 'orange'], [], ['banana', 'bar'], ['foo']];
    const result = getFirstOneByNestedArray(obj, keyss);
    expect(result).toBe(2);
  });

  it('should return for an empty array', () => {
    const obj = { foo: 1 };
    const keyss: string[][] = [];
    const result = getFirstOneByNestedArray(obj, keyss);
    expect(result).toBeUndefined();
  });
});
