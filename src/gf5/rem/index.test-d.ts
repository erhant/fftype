import type { Expect, Equal } from '@type-challenges/utils';
import type { Rem } from '.';
import type { F } from '../testing';
import type { FeltZero, Ford } from '../definitions';
import { BitsAdd } from '../definitions';

type _ = [
  // less than Ford
  Expect<Equal<Rem<F<1>>, F<1>>>,
  Expect<Equal<Rem<F<3>>, F<3>>>,
  // equal to Ford
  Expect<Equal<Rem<Ford>, FeltZero>>,
  // greater than Ford
  Expect<Equal<Rem<BitsAdd<F<2>, F<4>>>, F<1>>>,
  Expect<Equal<Rem<BitsAdd<F<4>, F<4>>>, F<3>>>,
];
