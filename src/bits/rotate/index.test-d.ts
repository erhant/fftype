import type { Expect, Equal } from '@type-challenges/utils';
import type { BitLeftRotate, BitRightRotate } from '.';

type _ = [
  // rotate left
  Expect<Equal<BitLeftRotate<[0, 0]>, [0, 0]>>,
  Expect<Equal<BitLeftRotate<[0, 1]>, [1, 0]>>,
  Expect<Equal<BitLeftRotate<[1, 0]>, [0, 1]>>,
  Expect<Equal<BitLeftRotate<[1, 1]>, [1, 1]>>,
  // rotate right
  Expect<Equal<BitRightRotate<[0, 0]>, [0, 0]>>,
  Expect<Equal<BitRightRotate<[0, 1]>, [1, 0]>>,
  Expect<Equal<BitRightRotate<[1, 0]>, [0, 1]>>,
  Expect<Equal<BitRightRotate<[1, 1]>, [1, 1]>>,
  // opposite rotates should cancel out
  Expect<Equal<BitLeftRotate<BitRightRotate<[1, 0, 1, 1, 0, 0]>>, [1, 0, 1, 1, 0, 0]>>,
];
