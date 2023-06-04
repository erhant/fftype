import type { Felt } from '../definitions';
import type { One, Zero } from '../utils';
import type { Add } from '../add';
import type { Lt } from '../comparators';
import type { Sub } from '../subtract';

/** Multiplication in this field. */
export type Mul<A extends Felt, B extends Felt> = Lt<A, B> extends true
  ? Mul<B, A>
  : B extends Zero
  ? Zero
  : MulBody<A, B, Zero>;

/** We recursively add `A` to the result until `B` is "depleted". */
// prettier-ignore
type MulBody<A extends Felt, B extends Felt, Result extends Felt> = 
  B extends Zero 
  ? Result // base-case
  : MulBody<
      A, 
      Sub<B, One>, 
      Add<Result, A>
    >;
