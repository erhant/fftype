import type { Expect, Equal } from '@type-challenges/utils';
import type { BitLeftShift, BitRightShift } from '.';

type b1 = [1, 0, 1, 1, 0, 0];
type b2 = [0, 0, 1, 1, 0, 1];

type _ = [
  // shift left
  Expect<Equal<BitLeftShift<[0, 0]>, [0, 0]>>,
  Expect<Equal<BitLeftShift<[0, 1]>, [1, 0]>>,
  Expect<Equal<BitLeftShift<[1, 0]>, [0, 0]>>,
  Expect<Equal<BitLeftShift<[1, 1]>, [1, 0]>>,
  // shift right
  Expect<Equal<BitRightShift<[0, 0]>, [0, 0]>>,
  Expect<Equal<BitRightShift<[0, 1]>, [0, 0]>>,
  Expect<Equal<BitRightShift<[1, 0]>, [0, 1]>>,
  Expect<Equal<BitRightShift<[1, 1]>, [0, 1]>>,
  // custom cases
  Expect<Equal<BitLeftShift<BitRightShift<b1>>, b1>>,
  Expect<Equal<BitRightShift<BitLeftShift<b2>>, b2>>,
];
