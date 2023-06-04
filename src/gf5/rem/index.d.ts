import type { Felt, Ford, Bits, BitsSub } from '../definitions';

/** Returns the remainder of a given element divided by `Ford`. */
export type Rem<A extends Bits> = A extends Felt ? A : Rem<BitsSub<A, Ford>>;
