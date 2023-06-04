import type { Expect, Equal } from '@type-challenges/utils';
import type { Sub } from '.';
import type { F } from '../definitions';

type _ = [
  // without underflow
  Expect<Equal<Sub<F<0>, F<0>>, F<0>>>,
  Expect<Equal<Sub<F<2>, F<2>>, F<0>>>,
  Expect<Equal<Sub<F<2>, F<1>>, F<1>>>,
  Expect<Equal<Sub<F<3>, F<1>>, F<2>>>,
  Expect<Equal<Sub<F<4>, F<2>>, F<2>>>,
  // with underflow
  Expect<Equal<Sub<F<0>, F<1>>, F<4>>>,
  Expect<Equal<Sub<F<2>, F<4>>, F<3>>>,
  Expect<Equal<Sub<F<0>, F<4>>, F<1>>>,
];
