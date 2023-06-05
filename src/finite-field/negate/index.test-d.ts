import type { Expect, Equal } from '@type-challenges/utils';
import type { Neg } from '.';
import type { F } from '../definitions';

type _ = [Expect<Equal<Neg<F<3>>, F<2>>>, Expect<Equal<Neg<F<2>>, F<3>>>, Expect<Equal<Neg<F<0>>, F<0>>>];
