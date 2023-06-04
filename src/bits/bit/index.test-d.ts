import type { Equal, Expect } from '@type-challenges/utils';
import type { LSB, MSB, MSB1 } from '.';

type _ = [
  // least-significant bit
  Expect<Equal<LSB<[0, 1, 0]>, 0>>,
  Expect<Equal<LSB<[0, 1, 1]>, 1>>,
  // most-significant bit
  Expect<Equal<MSB<[0, 0, 1]>, 0>>,
  Expect<Equal<MSB<[1, 1, 0]>, 1>>,
  // most-significant bit
  Expect<Equal<MSB1<[0, 0, 0, 1]>, [1, 0, 0, 1]>>,
  Expect<Equal<MSB1<[0, 1, 1, 0]>, [1, 1, 1, 0]>>,
];
