import type { Felt, FeltCast, FeltZero } from '../definitions';
import type { Add } from '../add';
import type { Lt } from '../comparators';

/** Multiplication in this field with "double-and-add" optimization. */
export type MultiplyOpt<A extends Felt, B extends Felt> = Lt<A, B> extends true
  ? MultiplyOpt<B, A>
  : B extends FeltZero
  ? FeltZero
  : MultiplyOptBody<A, B, FeltZero>;

/** Recursively add `A` to the result until `B` is "depleted".
 * - If `B` is an even number, we halve `B` and double the result.
 * - If `B` is an odd number, we just add `A` to the result and decrement `B`.
 */
// prettier-ignore
type MultiplyOptBody<A extends Felt, B extends Felt, Result extends Felt> = 
  B extends [...infer Tail, infer Last] 
  ?
    Last extends 0
    ? // `B` is even => double `Result`
      MultiplyOptBody<A,
      FeltCast<[0, ...Tail]>,
      FeltCast<Add<Result, Result>>>
    : // `B` is odd => add `A` to `Result`
      MultiplyOptBody<A, 
      FeltCast<[...Tail, 0]>,
      FeltCast<Add<Result, A>>>
  : never // impossible case
