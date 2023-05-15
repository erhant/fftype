import { Bit } from '../bit';

/**
 * Bitwise Addition, outputs a double: `[carry, sum]`
 */
// prettier-ignore
export type BitAdd<A extends Bit, B extends Bit> = 
  // both are 0
    [A, B] extends [0, 0] ? [0, 0]
  // one of them is 1
  : [A, B] extends [1, 0] | [0, 1] ? [0, 1]
  // both are 1
  : [1, 0];

/**
 * Bitwise Addition with carry input, outputs a double: `[carry, sum]`
 */
// prettier-ignore
export type BitAdd3<A extends Bit, B extends Bit, C extends Bit> =
  // all are 0
    [A, B, C] extends [0, 0, 0] ? [0, 0]
  // one of them is 1
  : [A, B, C] extends [1, 0, 0] | [0, 1, 0] | [0, 0, 1] ? [0, 1]
  // two of them are 1
  : [A, B, C] extends [1, 1, 0] | [1, 0, 1] | [0, 1, 1] ? [1, 0]
  // all of them are 1
  : [1, 1];
