import type { Expect, Equal } from '@type-challenges/utils';
import type { BitAnd, BitNot, BitOr, BitXor } from '.';

type _ = [
  // and
  Expect<Equal<BitAnd<0, 0>, 0>>,
  Expect<Equal<BitAnd<0, 1>, 0>>,
  Expect<Equal<BitAnd<1, 0>, 0>>,
  Expect<Equal<BitAnd<1, 1>, 1>>,
  // or
  Expect<Equal<BitOr<0, 0>, 0>>,
  Expect<Equal<BitOr<0, 1>, 1>>,
  Expect<Equal<BitOr<1, 0>, 1>>,
  Expect<Equal<BitOr<1, 1>, 1>>,
  // xor
  Expect<Equal<BitXor<0, 0>, 0>>,
  Expect<Equal<BitXor<0, 1>, 1>>,
  Expect<Equal<BitXor<1, 0>, 1>>,
  Expect<Equal<BitXor<1, 1>, 0>>,
  // not
  Expect<Equal<BitNot<0>, 1>>,
  Expect<Equal<BitNot<1>, 0>>,
];
