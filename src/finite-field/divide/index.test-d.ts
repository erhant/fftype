import type { Expect, Equal } from '@type-challenges/utils';
import type { Div } from '.';
import type { F } from '../definitions';

type _ = [
  Expect<Equal<Div<F<1>, F<1>>, F<1>>>,
  Expect<Equal<Div<F<3>, F<4>>, F<0>>>,
  Expect<Equal<Div<F<4>, F<3>>, F<1>>>,
  Expect<Equal<Div<F<4>, F<2>>, F<2>>>,
];
