import { Bit } from '../bit';
import { BitAnd, BitNot, BitOr, BitXor } from '../logic';

/**
 * Bitwise Subtraction, outputs a double: `[borrow, diff]`
 */
export type BitSubtract<A extends Bit, B extends Bit, Borrow extends Bit = 0> = Borrow extends 0
  ? [BitAnd<A, B>, BitXor<A, B>]
  : [BitOr<BitNot<A>, B>, BitNot<BitXor<A, B>>];
