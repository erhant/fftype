import type { Expect, Equal } from '@type-challenges/utils';
import type { Mod } from '.';
import type { F } from '../definitions';
import type { Zero } from '../utils';
import type { BitsAdd, Ford } from '../definitions';

type _ = [
  // less than Ford
  Expect<Equal<Mod<F<1>>, F<1>>>,
  Expect<Equal<Mod<F<3>>, F<3>>>,
  // equal to Ford
  Expect<Equal<Mod<Ford>, Zero>>,
  // greater than Ford
  Expect<Equal<Mod<BitsAdd<F<2>, F<4>>>, F<1>>>,
  Expect<Equal<Mod<BitsAdd<F<4>, F<4>>>, F<3>>>,
];
