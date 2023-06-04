import type { Bit } from '../../bits';
export type { BitsAdd } from './add';
export type { BitsSub } from './subtract';

/** An array bits, Big Endian: `[MSB, ..., LSB]`. */

export type Bits = [Bit, Bit, Bit, Bit];
