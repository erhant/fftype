import type { Expect, Equal } from '@type-challenges/utils';
import type { AdditiveInverse } from '.';
import type { F } from '../testing';

type _ = [
  Expect<Equal<AdditiveInverse<F<3>>, F<2>>>,
  Expect<Equal<AdditiveInverse<F<2>>, F<3>>>,
  Expect<Equal<AdditiveInverse<F<0>>, F<0>>>,
];
