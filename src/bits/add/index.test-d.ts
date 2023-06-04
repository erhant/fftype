import type { Equal, Expect } from '@type-challenges/utils';
import type { BitAdd } from '.';

type _ = [
  // without carry
  Expect<Equal<BitAdd<0, 0, 0>, [0, 0]>>,
  Expect<Equal<BitAdd<0, 1, 0>, [0, 1]>>,
  Expect<Equal<BitAdd<1, 0, 0>, [0, 1]>>,
  Expect<Equal<BitAdd<1, 1, 0>, [1, 0]>>,
  // with carry
  Expect<Equal<BitAdd<0, 0, 1>, [0, 1]>>,
  Expect<Equal<BitAdd<0, 1, 1>, [1, 0]>>,
  Expect<Equal<BitAdd<1, 0, 1>, [1, 0]>>,
  Expect<Equal<BitAdd<1, 1, 1>, [1, 1]>>,
];
