import type { Bits } from '../';
import type { Bit, BitSubtract } from '../../../bits';

/** Bitwise subtraction. */
export type BitsSub<
  A extends Bits,
  B extends Bits,
  Bit0 extends [Bit, Bit] = BitSubtract<A[3], B[3]>,
  Bit1 extends [Bit, Bit] = BitSubtract<A[2], B[2], Bit0[0]>,
  Bit2 extends [Bit, Bit] = BitSubtract<A[1], B[1], Bit1[0]>,
  Bit3 extends [Bit, Bit] = BitSubtract<A[0], B[0], Bit2[0]>,
> = [Bit3[1], Bit2[1], Bit1[1], Bit0[1]];
