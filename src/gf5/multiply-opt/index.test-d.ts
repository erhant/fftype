import type { Expect, Equal } from '@type-challenges/utils';
import type { MultiplyOpt } from '.';
import type { F } from '../testing';

// type _ = [
//   Expect<Equal<MultiplyOpt<F<3>, F<3>>, [0, 1, 0, 0]>>,
//   Expect<Equal<MultiplyOpt<F<3>, F<2>>, [0, 0, 0, 1]>>,
//   Expect<Equal<MultiplyOpt<F<3>, F<1>>, [0, 0, 1, 0]>>,
//   Expect<Equal<MultiplyOpt<F<3>, F<0>>, [0, 0, 0, 0]>>,
// ];
