import { Bit } from '../bit';

/**
 * Logical NOT operation on bits.
 */
export type BitNot<T extends Bit> = T extends 0 ? 1 : 0;

/**
 * Logical ADD operation on bits.
 */
export type BitAnd<A extends Bit, B extends Bit> = [A, B] extends [1, 1] ? 1 : 0;

/**
 * Logical OR operation on bits.
 */
export type BitOr<A extends Bit, B extends Bit> = [A, B] extends [0, 0] ? 0 : 1;

/**
 * Logical XOR operation on bits.
 */
export type BitXor<A extends Bit, B extends Bit> = [A, B] extends [0, 0] | [1, 1]
  ? 0
  : [A, B] extends [0, 1] | [1, 0]
  ? 1
  : never; // impossible case
