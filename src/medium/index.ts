export async function sequentiallyApplyAsyncFunctions<T>(
  funcs: ((t: T) => Promise<T>)[],
  initial: T,
): Promise<T> {
  let output = initial;
  for (const func of funcs) {
    output = await func(output);
  }
  return output;
}

export function getFirstOneByNestedArray<T>(
  store: {[k in string]: T},
  keyss: string[][],
): T | undefined {
  for (const keys of keyss) {
    for (const key of keys) {
      if (store[key] !== undefined) {
        return store[key];
      }
    }
  }
  return undefined;
}
