import { Bit, BitSubtract } from '../../bits';
import { Int4 } from '../int4';

/**
 * Addition with inverse.
 */
export type Subtract<
  A extends Int4,
  B extends Int4,
  Sub3 extends [Bit, Bit] = BitSubtract<A[3], B[3]>,
  Sub2 extends [Bit, Bit] = BitSubtract<A[2], B[2], Sub3[0]>,
  Sub1 extends [Bit, Bit] = BitSubtract<A[1], B[1], Sub2[0]>,
  Sub0 extends [Bit, Bit] = BitSubtract<A[0], B[0], Sub1[0]>,
> = [Sub0[1], Sub1[1], Sub2[1], Sub3[1]];
