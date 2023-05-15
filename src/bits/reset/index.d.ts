import { Bit } from '../bit';

/**
 * Resets an array of bits.
 * To Set them instead, give 1.
 */
export type BitReset<Ints extends Bit[], To extends Bit = 0> = {
  [Index in keyof Ints]: To;
};
