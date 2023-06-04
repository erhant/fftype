import type { Expect, Equal } from '@type-challenges/utils';
import type { Int4Add } from '.';
import type { I } from '../testing';

type _ = [
  // without overflow
  Expect<Equal<Int4Add<I<3>, I<9>>, I<12>>>,
  Expect<Equal<Int4Add<I<7>, I<1>>, I<8>>>,
  Expect<Equal<Int4Add<I<0>, I<0>>, I<0>>>,
  Expect<Equal<Int4Add<I<2>, I<2>>, I<4>>>,
  Expect<Equal<Int4Add<I<2>, I<3>>, I<5>>>,
  // with overflow
  Expect<Equal<Int4Add<I<7>, I<9>>, I<0>>>,
  Expect<Equal<Int4Add<I<8>, I<10>>, I<2>>>,
  // netural
  Expect<Equal<Int4Add<I<0>, I<0>>, I<0>>>,
  Expect<Equal<Int4Add<I<7>, I<0>>, I<7>>>,
];
