import { Bit } from '../..';

/**
 * Minimum number of bits to represent any element
 * within the current field.
 *
 * Uses Big-endian:
 *
 * `[MSB, bit, bit, LSB]`
 */
export type Int4 = [Bit, Bit, Bit, Bit];

/**
 * Given a number return the 4-bit representation.
 */
export type ToInt4<N extends number> = N extends keyof Int4Table ? Int4Table[N] : never;
type Int4Table = {
  0: [0, 0, 0, 0];
  1: [0, 0, 0, 1];
  2: [0, 0, 1, 0];
  3: [0, 0, 1, 1];
  4: [0, 1, 0, 0];
  5: [0, 1, 0, 1];
  6: [0, 1, 1, 0];
  7: [0, 1, 1, 1];
  8: [1, 0, 0, 0];
  9: [1, 0, 0, 1];
  10: [1, 0, 1, 0];
  11: [1, 0, 1, 1];
  12: [1, 1, 0, 0];
  13: [1, 1, 0, 1];
  14: [1, 1, 1, 0];
  15: [1, 1, 1, 1];
};
