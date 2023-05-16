import { Bit } from '../bit';

/**
 * Bitwise Addition (with optional carry), outputs a double: `[carry, sum]`
 *
 * See the truth table below to understand what happens:
 * ```
 * A B Ca | Ca Su
 * -------------
 * 0 0 0  | 0  0
 * 0 1 0  | 0  1
 * 1 0 0  | 0  1
 * 1 1 0  | 1  0
 * -------------
 * 0 0 1  | 0  1
 * 0 1 1  | 1  0
 * 1 0 1  | 1  0
 * 1 1 1  | 1  1
 * ```
 */
export type BitAdd<A extends Bit, B extends Bit, Carry extends Bit = 0> = Carry extends 0
  ? [[A, B] extends [1, 1] ? 1 : 0, A extends B ? 0 : 1]
  : [[A, B] extends [0, 0] ? 0 : 1, A extends B ? 1 : 0];
