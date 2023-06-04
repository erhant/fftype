import type { Expect, Equal } from '@type-challenges/utils';
import type { BitFill } from '.';

type _ = [
  // reset bits, make them all 0
  Expect<Equal<BitFill<[0, 1]>, [0, 0]>>,
  Expect<Equal<BitFill<[1, 1]>, [0, 0]>>,
  Expect<Equal<BitFill<[1, 1, 0, 1, 0]>, [0, 0, 0, 0, 0]>>,
  // set bits, make them all 1
  Expect<Equal<BitFill<[0, 1], 1>, [1, 1]>>,
  Expect<Equal<BitFill<[1, 1], 1>, [1, 1]>>,
  Expect<Equal<BitFill<[1, 1, 0, 1, 0], 1>, [1, 1, 1, 1, 1]>>,
];
