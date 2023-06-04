import type { Bit } from '../bits';

export type Felt = [0, 1, 1, 0, 0] | [0, 1, 0, Bit, Bit] | [0, 0, Bit, Bit, Bit];
export type Ford = [0, 1, 1, 0, 1];

// mostly for testing
export type F<N extends number> = N extends keyof Table ? Table[N] : never;
type Table = {
  0: [0, 0, 0, 0, 0];
  1: [0, 0, 0, 0, 1];
  2: [0, 0, 0, 1, 0];
  3: [0, 0, 0, 1, 1];
  4: [0, 0, 1, 0, 0];
  5: [0, 0, 1, 0, 1];
  6: [0, 0, 1, 1, 0];
  7: [0, 0, 1, 1, 1];
  8: [0, 1, 0, 0, 0];
  9: [0, 1, 0, 0, 1];
  10: [0, 1, 0, 1, 0];
  11: [0, 1, 0, 1, 1];
  12: [0, 1, 1, 0, 0];
};
