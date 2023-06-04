import type { Felt, Ford, Bits, BitsSub } from '../definitions';

/**
 * Returns the remainder of a given element in the bit-space divided by `Ford`.
 * This is required in addition to `Rem` operation because here the input is larger
 * than the field.
 */
export type Mod<A extends Bits> = A extends Felt ? A : Mod<BitsSub<A, Ford>>;
