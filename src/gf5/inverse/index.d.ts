import { Felt, Ford } from '../felt';
import { Int4Subtract } from '../../bits/';
import { Int4 } from '../../bits/';

/**
 * Returns the Felt such that A + Felt = 0
 */
export type AdditiveInverse<A extends Felt, Sub extends Int4 = Int4Subtract<Ford, A>> = Sub extends Felt ? Sub : never;

/**
 * Returns the Felt such that A * Felt = 1
 */
export type MultiplicativeInverse<A extends Felt> = never; // TODO;
