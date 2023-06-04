import type { Expect, Equal } from '@type-challenges/utils';
import type { Multiply } from '.';
import type { F } from '../testing';

type _ = [
  Expect<Equal<Multiply<F<3>, F<3>>, F<4>>>,
  Expect<Equal<Multiply<F<3>, F<2>>, F<1>>>,
  Expect<Equal<Multiply<F<3>, F<4>>, F<2>>>,
  Expect<Equal<Multiply<F<3>, F<0>>, F<0>>>,
  Expect<Equal<Multiply<Multiply<Multiply<F<3>, F<3>>, F<3>>, F<3>>, F<1>>>,
];
