import type { Lt } from '../comparators';
import type { Felt } from '../definitions';
import type { Sub } from '../subtract';

/** Returns the remainder of a given element divided by another. */
export type Rem<A extends Felt, B extends Felt> = Lt<A, B> extends true ? A : Rem<Sub<A, B>, B>;
