import type { Bit } from '../bits';

export type { Int4Add as BitsAdd, Int4 as Bits, Int4Subtract as BitsSub } from '../int4';

/** A field element (Felt) within the finite field of order p has elements {0, 1, ..., p-1}. */
export type Felt = [0, 1, 0, 0] | [0, 0, Bit, Bit];

/** Order of the finite field, `p`. */
export type Ford = [0, 1, 0, 1];

/** Zero in the finite field. */
export type FeltZero = [0, 0, 0, 0];

/** Minus one in the finite field. */
export type FeltMinusOne = [0, 1, 0, 0];

/** Cast to felt, reminding the compiler that things are OK. */
export type FeltCast<A> = A extends Felt ? A : Felt;
