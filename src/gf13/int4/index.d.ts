import { Bit } from '../../bits';

/**
 * Minimum number of bits to represent any element
 * within the current field.
 *
 * Uses Big-endian:
 *
 * `[MSB, bit, bit, LSB]`
 */
export type Int4 = [Bit, Bit, Bit, Bit];
