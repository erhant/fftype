/**
 * Given a number return the 4-bit representation.
 * We don' have to write every number here, as this is only used for testing purposes.
 */
export type I<N extends number> = N extends keyof Int5Table ? Int5Table[N] : never;
type Int5Table = {
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
  13: [0, 1, 1, 0, 1];
  14: [0, 1, 1, 1, 0];
  15: [0, 1, 1, 1, 1];
};
