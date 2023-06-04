import type { Bit } from '../bits';

export type Felt = [0, 1, 0, 0] | [0, 0, Bit, Bit];
export type Ford = [0, 1, 0, 1];

// for testing
export type F<N extends number> = N extends keyof Table ? Table[N] : never;
type Table = {
  0: [0, 0, 0, 0];
  1: [0, 0, 0, 1];
  2: [0, 0, 1, 0];
  3: [0, 0, 1, 1];
  4: [0, 1, 0, 0];
};
