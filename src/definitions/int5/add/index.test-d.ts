import type { Expect, Equal } from '@type-challenges/utils';
import type { BitsAdd } from '.';
import type { I } from '../testing';

type _ = [
  // without overflow
  Expect<Equal<BitsAdd<I<3>, I<9>>, I<12>>>,
  Expect<Equal<BitsAdd<I<7>, I<1>>, I<8>>>,
  Expect<Equal<BitsAdd<I<0>, I<0>>, I<0>>>,
  Expect<Equal<BitsAdd<I<2>, I<2>>, I<4>>>,
  Expect<Equal<BitsAdd<I<2>, I<3>>, I<5>>>,
  // with overflow
  // TODO
  // netural
  Expect<Equal<BitsAdd<I<0>, I<0>>, I<0>>>,
  Expect<Equal<BitsAdd<I<7>, I<0>>, I<7>>>,
];
