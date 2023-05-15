import { Bit } from '../bit';
import { BitAnd, BitNot, BitOr, BitXor } from '../logic';

/**
 * Bitwise Addition (with optional carry), outputs a double: `[carry, sum]`
 */
export type BitAdd<A extends Bit, B extends Bit, Carry extends Bit = 0> = Carry extends 0
  ? [BitAnd<A, B>, BitXor<A, B>]
  : [BitOr<A, B>, BitNot<BitXor<A, B>>];
