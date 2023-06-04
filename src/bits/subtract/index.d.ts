import type { Bit } from '../bit';

/**
 * Bitwise Subtraction, outputs a double: `[borrow, diff]`.
 *
 * See the truth table below to understand what happens:
 * ```
 * A B Bo | Bo Di
 * -------------
 * 0 0 0  | 0  0
 * 0 1 0  | 1  1
 * 1 0 0  | 0  1
 * 1 1 0  | 0  0
 * -------------
 * 0 0 1  | 1  1
 * 0 1 1  | 1  0
 * 1 0 1  | 0  0
 * 1 1 1  | 1  1
 * ```
 */
export type BitSubtract<A extends Bit, B extends Bit, Borrow extends Bit = 0> = Borrow extends 0
  ? [[A, B] extends [0, 1] ? 1 : 0, A extends B ? 0 : 1]
  : [[A, B] extends [1, 0] ? 0 : 1, A extends B ? 1 : 0];
