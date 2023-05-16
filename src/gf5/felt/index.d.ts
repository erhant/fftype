/**
 * A field element (abbr. Felt) within the finite field of order p has elements {0, 1, ..., p-1}.
 */
export type Felt = [0, 0, 0, 0] | [0, 0, 0, 1] | [0, 0, 1, 0] | [0, 0, 1, 1] | [0, 1, 0, 0];

/**
 * Order of the finite field, `p`.
 */
export type Ford = [0, 1, 0, 1];

/**
 * Given a number return the bitwise representation as a field element.
 */
export type ToFelt<N extends number> = N extends keyof FeltTable ? FeltTable[N] : never;
type FeltTable = {
  0: [0, 0, 0, 0];
  1: [0, 0, 0, 1];
  2: [0, 0, 1, 0];
  3: [0, 0, 1, 1];
  4: [0, 1, 0, 0];
};
