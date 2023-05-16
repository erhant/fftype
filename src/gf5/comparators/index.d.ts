import { Felt } from '../felt';
import { Int4Subtract } from '../../bits/';

/**
 * Result in `true` if A = B, `false` otherwise.
 */
export type Eq<A extends Felt, B extends Felt> = A extends B ? true : false;

/**
 * Result in `true` if A != B, `false` otherwise.
 */
export type NotEq<A extends Felt, B extends Felt> = A extends B ? false : true;

/**
 * Result in `true` if A < B, `false` otherwise.
 *
 * This one has a *special* trick, where we simply do ([1, 0, 0, 0] & A) - B and check the MSB. The MSB will be 1 if indeed A < B.
 * Furthermore, MSB is always 1 for a Felt because we make sure our bitsize is larger than any Felt bitsize.
 */
export type Lt<A extends Felt, B extends Felt> = Int4Subtract<[1, A[1], A[2], A[3]], B>[0] extends 1 ? false : true;

/**
 * Result in `true` if A <= B, `false` otherwise.
 */
export type LtEq<A extends Felt, B extends Felt> = Lt<A, B> extends false ? Eq<A, B> : true;

/**
 * Result in `true` if A > B, `false` otherwise.
 */
export type GtEq<A extends Felt, B extends Felt> = Lt<A, B> extends false ? true : false;

/**
 * Result in `true` if A >= B, `false` otherwise.
 */
export type Gt<A extends Felt, B extends Felt> = LtEq<A, B> extends false ? true : false;
