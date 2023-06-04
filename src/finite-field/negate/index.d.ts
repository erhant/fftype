import type { Felt, Ford, BitsSub } from '../definitions';
import type { FeltCast } from '../utils';

/** Returns the Felt such that A + Felt = 0 (mod Ford). */
export type Neg<A extends Felt> = FeltCast<BitsSub<Ford, A>>;
