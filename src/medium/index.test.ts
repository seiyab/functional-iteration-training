import {
  sequentiallyApplyAsyncFunctions,
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
