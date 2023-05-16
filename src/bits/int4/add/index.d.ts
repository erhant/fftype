import { Int4 } from '../int4';
import { Bit, BitAdd } from '../..';

/**
 * Addition law in this field.
 */
export type Add<
  A extends Int4,
  B extends Int4,
  Bit0 extends [Bit, Bit] = BitAdd<A[3], B[3]>,
  Bit1 extends [Bit, Bit] = BitAdd<A[2], B[2], Bit0[0]>,
  Bit2 extends [Bit, Bit] = BitAdd<A[1], B[1], Bit1[0]>,
  Bit3 extends [Bit, Bit] = BitAdd<A[0], B[0], Bit2[0]>,
> = [Bit3[1], Bit2[1], Bit1[1], Bit0[1]];
