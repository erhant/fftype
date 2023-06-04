export type { Int4Add } from './add';
export type { Int4Subtract } from './subtract';
import type { Bit } from '../bits';

/**
 * Minimum number of bits to represent any element
 * within the current field.
 *
 * Uses Big-endian:
 *
 * `[MSB, ..., LSB]`
 */
export type Int4 = [Bit, Bit, Bit, Bit];
