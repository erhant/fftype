import type { Felt, Ford, Bits, BitsSub, FeltZero } from '../definitions';

/** Returns the Felt such that A + Felt = 0. */
export type AdditiveInverse<A extends Felt, Sub extends Bits = BitsSub<Ford, A>> = Sub extends Felt
  ? Sub
  : Sub extends Ford
  ? FeltZero
  : never;

/** Returns the Felt such that A * Felt = 1. */
export type MultiplicativeInverse<A extends Felt> = never; // TODO;
