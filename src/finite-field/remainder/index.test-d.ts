import type { Expect, Equal } from '@type-challenges/utils';
import type { Rem } from '.';
import type { F } from '../definitions';

type _ = [
  Expect<Equal<Rem<F<1>, F<1>>, F<0>>>,
  Expect<Equal<Rem<F<3>, F<2>>, F<1>>>,
  Expect<Equal<Rem<F<4>, F<2>>, F<0>>>,
  Expect<Equal<Rem<F<3>, F<1>>, F<0>>>,
  Expect<Equal<Rem<F<4>, F<3>>, F<1>>>,
];
