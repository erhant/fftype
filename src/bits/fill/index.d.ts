import type { Bit } from '../bit';

/** Fill an array of bits. Default fills to 0. */
export type BitFill<Bits extends Bit[], Fill extends Bit = 0> = {
  [Index in keyof Bits]: Fill;
};
