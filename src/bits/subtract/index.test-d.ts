import { Expect, Equal } from '@type-challenges/utils';
import { BitSubtract } from '.';

type _ = [
  // without borrow
  Expect<Equal<BitSubtract<0, 0, 0>, [0, 0]>>,
  Expect<Equal<BitSubtract<0, 1, 0>, [1, 1]>>,
  Expect<Equal<BitSubtract<1, 0, 0>, [0, 1]>>,
  Expect<Equal<BitSubtract<1, 1, 0>, [0, 0]>>,
  // with borrow
  Expect<Equal<BitSubtract<0, 0, 1>, [1, 1]>>,
  Expect<Equal<BitSubtract<0, 1, 1>, [1, 0]>>,
  Expect<Equal<BitSubtract<1, 0, 1>, [0, 0]>>,
  Expect<Equal<BitSubtract<1, 1, 1>, [1, 1]>>,
];
