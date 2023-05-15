import { Felt } from '../felt';

/**
 * Map a field element to bits. This is just to
 * ease the testing code, and should not be used in actual lib.
 */
export type FeltToBits<N extends Felt> = {
  0: [0, 0, 0, 0];
  1: [0, 0, 0, 1];
  2: [0, 0, 1, 0];
  3: [0, 0, 1, 1];
  4: [0, 1, 0, 0];
  5: [0, 1, 0, 1];
  6: [0, 1, 1, 0];
  7: [0, 1, 1, 1];
  8: [1, 0, 0, 0];
  9: [1, 0, 0, 1];
  10: [1, 0, 1, 0];
  11: [1, 0, 1, 1];
  12: [1, 1, 0, 0];
  // 13 = 1 1 0 1
  // 14 = 1 1 1 0
  // 15 = 1 1 1 1
}[N];
