import type { Expect, Equal } from '@type-challenges/utils';
import type { Add } from '.';
import type { F } from '../definitions';

type _ = [
  // without overflow
  Expect<Equal<Add<F<0>, F<0>>, F<0>>>,
  Expect<Equal<Add<F<2>, F<2>>, F<4>>>,
  // with overflow (w.r.t mod)
  Expect<Equal<Add<F<2>, F<3>>, F<0>>>,
  Expect<Equal<Add<F<3>, F<3>>, F<1>>>,
  Expect<Equal<Add<F<1>, F<4>>, F<0>>>,
  Expect<Equal<Add<F<4>, F<4>>, F<3>>>,
];
