import { Bit } from '../bit';

/**
 * Bitwise Addition, outputs a double: `[sum, carry]`
 */
export type BitAdd<A extends Bit, B extends Bit> = [A, B] extends [0, 0]
  ? [0, 0]
  : [A, B] extends [1, 0] | [0, 1]
  ? [1, 0]
  : [0, 1];

/**
 * Bitwise Addition with carry input, outputs a double: `[sum, carry]`
 */
export type BitAdd3<A extends Bit, B extends Bit, C extends Bit> = [A, B, C] extends [0, 0, 0]
  ? [0, 0]
  : [A, B, C] extends [1, 0, 0] | [0, 1, 0] | [0, 0, 1]
  ? [1, 0]
  : [A, B, C] extends [1, 1, 0] | [1, 0, 1] | [0, 1, 1]
  ? [0, 1]
  : [1, 1];
