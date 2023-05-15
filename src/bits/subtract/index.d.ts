import { Bit } from '../bit';

/**
 * Bitwise Subtraction, outputs a double: `[borrow, diff]`
 */
// prettier-ignore
export type BitSubtract<A extends Bit, B extends Bit> = 
  // 1 - 1 = 0 - 0 = 0, no borrow
    [A, B] extends [0, 0] | [1, 1] ? [0, 0]
  // 1 - 0 = 1, no borrow
  : [A, B] extends [1, 0] ? [0, 1]
  // 0 - 1 = 0 with borrow
  : [A, B] extends [0, 1] ? [1, 1]
  : never; // impossible

/**
 * Bitwise Subtraction with borrow, outputs a double: `[borrow, diff]`
 * TODO TODO
 */
// prettier-ignore
export type BitSubtract3<A extends Bit = 0, B extends Bit = 0, C extends Bit = 0> =
  // 0 - 0 = 0 without borrow
    [A, B, C] extends [0, 0, 0] ? [0, 0]
  // 0 - 1 = 0 without borrow
  : [A, B, C] extends [0, 1, 0] ? [0, 1]
  // 1 - 0 = 1 without borrow
  : [A, B, C] extends [1, 0, 0] ? [1, 1]
  // 1 - 1 = 0 without borrow
  : [A, B, C] extends [1, 1, 0] ? [1, 0]
  // 0 - 0 = 0 with borrow
  : [A, B, C] extends [0, 0, 1] ? [0, 0]
  // 0 - 1 = 0 with borrow
  : [A, B, C] extends [0, 1, 1] ? [0, ]
  // 1 - 0 = 0 with borrow
  : [A, B, C] extends [1, 0, 1] ? [0, 0]
  // 1 - 1 = 0 with borrow
  : [A, B, C] extends [1, 1, 1] ? [1, 1]
  : never;
