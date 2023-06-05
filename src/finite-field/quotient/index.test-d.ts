import type { Expect, Equal } from '@type-challenges/utils';
import type { Quot } from '.';
import type { F } from '../definitions';

type _ = [
  Expect<Equal<Quot<F<1>, F<1>>, F<1>>>,
  Expect<Equal<Quot<F<3>, F<4>>, F<0>>>,
  Expect<Equal<Quot<F<4>, F<3>>, F<1>>>,
  Expect<Equal<Quot<F<4>, F<2>>, F<2>>>,
];
