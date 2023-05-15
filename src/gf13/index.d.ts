import { Bit, BitAdd, BitAdd3, BitSubtract, BitSubtract3 } from '../bits';

/**
 * A 4-bit integer. MSB is the last and LSB is the first bit, unlike
 * a usual binary string.
 */
export type Int4 = [Bit, Bit, Bit, Bit];

export type Int4Add<
  A extends Int4,
  B extends Int4,
  At0 extends BitAdd<A[0], B[0]> = BitAdd<A[0], B[0]>,
  At1 extends BitAdd3<A[1], B[1], At0[1]> = BitAdd3<A[1], B[1], At0[1]>,
  At2 extends BitAdd3<A[2], B[2], At1[1]> = BitAdd3<A[2], B[2], At1[1]>,
  At3 extends BitAdd3<A[3], B[3], At2[1]> = BitAdd3<A[3], B[3], At2[1]>,
> = [At0[0], At1[0], At2[0], At3[0]];

export type Int4Sub<
  A extends Int4,
  B extends Int4,
  Sub0 extends BitSubtract<A[0], B[0]> = BitSubtract<A[0], B[0]>,
  Sub1 extends BitSubtract3<Sub0[1], A[1], B[1]> = BitSubtract3<Sub0[1], A[1], B[1]>,
  Sub2 extends BitSubtract3<Sub1[1], A[2], B[2]> = BitSubtract3<Sub1[1], A[2], B[2]>,
  Sub3 extends BitSubtract3<Sub2[1], A[3], B[3]> = BitSubtract3<Sub2[1], A[3], B[3]>,
> = [Sub0[0], Sub1[0], Sub2[0], Sub3[0]];
