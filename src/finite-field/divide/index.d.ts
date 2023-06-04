import type { Add } from '../add';
import type { Lt } from '../comparators';
import type { Felt } from '../definitions';
import type { Sub } from '../subtract';
import type { One, Zero } from '../utils';

/** Returns the quotient of a given element divided by another. */
export type Div<A extends Felt, B extends Felt, Result extends Felt = Zero> = Lt<A, B> extends true
  ? Result
  : Div<Sub<A, B>, B, Add<Result, One>>;
