import type { MSB1 } from '../../bits';
import type { Felt, BitsSub } from '../definitions';

/** Result in `true` if A == B, `false` otherwise. */
export type Eq<A extends Felt, B extends Felt> = A extends B ? true : false;

/** Result in `true` if A != B, `false` otherwise. */
export type NotEq<A extends Felt, B extends Felt> = A extends B ? false : true;

/** Result in `true` if A < B, `false` otherwise.
 *
 * This one has a *special* trick, where we simply do set MSB of A to be 1, and check it after subtracting B from A. The MSB will be 1 if indeed A < B.
 * Furthermore, MSB is always 0 for a Felt because we make sure our bitsize is larger than any Felt bitsize, so this is safe to do.
 */
export type Lt<A extends Felt, B extends Felt> = BitsSub<MSB1<A>, B>[0] extends 1 ? false : true;

/** Result in `true` if A <= B, `false` otherwise. */
export type LtEq<A extends Felt, B extends Felt> = Lt<A, B> extends false ? Eq<A, B> : true;

/** Result in `true` if A > B, `false` otherwise. */
export type GtEq<A extends Felt, B extends Felt> = Lt<A, B> extends false ? true : false;

/** Result in `true` if A >= B, `false` otherwise. */
export type Gt<A extends Felt, B extends Felt> = LtEq<A, B> extends false ? true : false;
