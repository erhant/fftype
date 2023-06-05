import type { Expect, Equal } from '@type-challenges/utils';
import type { BitsSub } from '.';
import type { I } from '../testing';

type _ = [
  // A - B where A = B
  Expect<Equal<BitsSub<I<5>, I<5>>, I<0>>>,
  // A - B where B = 0
  Expect<Equal<BitsSub<I<4>, I<0>>, I<4>>>,
  // A - B where A > B
  Expect<Equal<BitsSub<I<6>, I<4>>, I<2>>>,
  Expect<Equal<BitsSub<I<10>, I<8>>, I<2>>>,
  Expect<Equal<BitsSub<I<6>, I<3>>, I<3>>>,
  Expect<Equal<BitsSub<I<4>, I<3>>, I<1>>>,
  // A - B where A < B (should underflow)
  Expect<Equal<BitsSub<I<3>, I<4>>, I<15>>>,
  Expect<Equal<BitsSub<I<1>, I<7>>, I<10>>>,
];
