/** Given a number return the bitwise representation as a field element. */
export type F<N extends number> = N extends keyof FeltTable ? FeltTable[N] : never;
type FeltTable = {
  0: [0, 0, 0, 0];
  1: [0, 0, 0, 1];
  2: [0, 0, 1, 0];
  3: [0, 0, 1, 1];
  4: [0, 1, 0, 0];
};
