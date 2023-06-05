import type { Felt, Ford, BitsSub } from '../definitions';
import type { FeltCast, Zero } from '../utils';

/** Returns the Felt such that A + Felt = 0 (mod Ford). */
export type Neg<A extends Felt> = A extends Zero ? Zero : FeltCast<BitsSub<Ford, A>>;
