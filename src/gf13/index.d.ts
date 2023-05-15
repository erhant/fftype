import { Bit, BitAdd, BitSubtract } from '../bits';

export type Int4Sub<
  A extends Int4,
  B extends Int4,
  Sub0 extends BitSubtract<A[0], B[0]> = BitSubtract<A[0], B[0]>,
  Sub1 extends BitSubtract3<Sub0[1], A[1], B[1]> = BitSubtract3<Sub0[1], A[1], B[1]>,
  Sub2 extends BitSubtract3<Sub1[1], A[2], B[2]> = BitSubtract3<Sub1[1], A[2], B[2]>,
  Sub3 extends BitSubtract3<Sub2[1], A[3], B[3]> = BitSubtract3<Sub2[1], A[3], B[3]>,
> = [Sub0[0], Sub1[0], Sub2[0], Sub3[0]];
