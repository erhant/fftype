import type { Expect, Equal } from '@type-challenges/utils';
import type { Int4Subtract } from '.';
import type { I } from '../testing';

type _ = [
  // A - B where A = B
  Expect<Equal<Int4Subtract<I<5>, I<5>>, I<0>>>,
  // A - B where B = 0
  Expect<Equal<Int4Subtract<I<4>, I<0>>, I<4>>>,
  // A - B where A > B
  Expect<Equal<Int4Subtract<I<6>, I<4>>, I<2>>>,
  Expect<Equal<Int4Subtract<I<10>, I<8>>, I<2>>>,
  Expect<Equal<Int4Subtract<I<6>, I<3>>, I<3>>>,
  Expect<Equal<Int4Subtract<I<4>, I<3>>, I<1>>>,
  // A - B where A < B (should underflow)
  Expect<Equal<Int4Subtract<I<4>, I<5>>, I<15>>>, // underflows
  Expect<Equal<Int4Subtract<I<2>, I<8>>, I<10>>>, // underflows
];
