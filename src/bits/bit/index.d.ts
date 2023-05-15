/**
 * 0 or 1.
 */
export type Bit = 0 | 1;

/**
 * Converts an array of bits into an array of zeros.
 */
export type BitZeros<Ints extends Bit[]> = {
  [Index in keyof Ints]: 0;
};

/**
 * Replaces an array of bits with the given bits.
 * @deprecated todo: will change the order of bits
 */
export type BitReplace<Bits extends Bit[], Replacements extends Bit[]> = {
  [Index in keyof Bits]: Index extends keyof Replacements ? Replacements[Index] : Bits[Index];
};
