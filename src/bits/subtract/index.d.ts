import { Bit } from '../bit';

// Output: [Diff, Borrow]
type BitSubtract<A extends Bit, B extends Bit> = [A, B] extends [0, 0] | [1, 1]
  ? [0, 0]
  : [A, B] extends [1, 0]
  ? [1, 0]
  : [A, B] extends [0, 1]
  ? [1, 1]
  : [Bit, Bit];

// [Borrow, Top, Bottom]: as in, -Borrow + (Top - Bottom)
// [Diff, Borrow]
type BitSubtract3<A extends Bit = 0, B extends Bit = 0, C extends Bit = 0> = [A, B, C] extends [0, 0, 0]
  ? [0, 0]
  : [A, B, C] extends [1, 0, 0]
  ? [1, 1] // ???
  : [A, B, C] extends [0, 1, 0]
  ? [1, 0]
  : [A, B, C] extends [0, 0, 1]
  ? [1, 1] // ???
  : [A, B, C] extends [1, 1, 0]
  ? [0, 0]
  : [A, B, C] extends [1, 0, 1]
  ? [0, 1] // ???
  : [A, B, C] extends [0, 1, 1]
  ? [0, 0]
  : [A, B, C] extends [1, 1, 1]
  ? [1, 1] // ???
  : [Bit, Bit];
