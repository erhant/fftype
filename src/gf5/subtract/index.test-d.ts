import type { Expect, Equal } from '@type-challenges/utils';
import type { Subtract } from '.';
import type { F } from '../testing';

type _ = [
  // without underflow
  Expect<Equal<Subtract<F<0>, F<0>>, F<0>>>,
  Expect<Equal<Subtract<F<2>, F<2>>, F<0>>>,
  Expect<Equal<Subtract<F<2>, F<1>>, F<1>>>,
  Expect<Equal<Subtract<F<3>, F<1>>, F<2>>>,
  Expect<Equal<Subtract<F<4>, F<2>>, F<2>>>,
  // with underflow
  Expect<Equal<Subtract<F<0>, F<1>>, F<4>>>,
  Expect<Equal<Subtract<F<2>, F<4>>, F<3>>>,
  Expect<Equal<Subtract<F<0>, F<4>>, F<1>>>,
];
