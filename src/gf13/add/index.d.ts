import { Bit, BitAdd } from '../../bits';
import { Int4 } from '../int4';

/**
 * Addition law in this field.
 */
export type Add<
  A extends Int4,
  B extends Int4,
  At0 extends [Bit, Bit] = BitAdd<A[3], B[3]>,
  At1 extends [Bit, Bit] = BitAdd<A[2], B[2], At0[0]>,
  At2 extends [Bit, Bit] = BitAdd<A[1], B[1], At1[0]>,
  At3 extends [Bit, Bit] = BitAdd<A[0], B[0], At2[0]>,
> = [At3[1], At2[1], At1[1], At0[1]];
