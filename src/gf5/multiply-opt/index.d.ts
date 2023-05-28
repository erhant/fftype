import { Felt, ToFelt } from '../felt';
import { AdditiveInverse } from '../inverse';
import { Add } from '../add';
import { Lt } from '../comparators';

type Zero = ToFelt<0>;
type MinusOne = AdditiveInverse<ToFelt<1>>;
type CastFelt<A> = A extends Felt ? A : Felt; // just remind the compiler that things are ok

/**
 * Multiplication in this field with "double-and-add" optimization.
 */
export type MultiplyOpt<A extends Felt, B extends Felt> = Lt<A, B> extends true
  ? MultiplyOpt<B, A>
  : B extends Zero
  ? Zero
  : MultiplyOptBody<A, B, Zero>;

/**
 * We recursively add `A` to the result until `B` is "depleted".
 *
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
      CastFelt<[0, ...Tail]>,
      CastFelt<Add<Result, Result>>>
    : // `B` is odd => add `A` to `Result`
      MultiplyOptBody<A, 
      CastFelt<[...Tail, 0]>,
      CastFelt<Add<Result, A>>>
  : never // impossible case
