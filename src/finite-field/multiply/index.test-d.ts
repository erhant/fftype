import type { Expect, Equal } from '@type-challenges/utils';
import type { Mul } from '.';
import type { F } from '../definitions';

type _ = [
  Expect<Equal<Mul<F<3>, F<3>>, F<4>>>,
  Expect<Equal<Mul<F<3>, F<2>>, F<1>>>,
  Expect<Equal<Mul<F<3>, F<4>>, F<2>>>,
  Expect<Equal<Mul<F<3>, F<0>>, F<0>>>,
  Expect<Equal<Mul<Mul<Mul<F<3>, F<3>>, F<3>>, F<3>>, F<1>>>,
];
