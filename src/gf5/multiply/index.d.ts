import type { Felt, FeltCast, FeltMinusOne, FeltZero } from '../definitions';
import type { Add } from '../add';
import type { Lt } from '../comparators';

/**
 * Multiplication in this field.
 */
export type Multiply<A extends Felt, B extends Felt> = Lt<A, B> extends true
  ? Multiply<B, A>
  : B extends FeltZero
  ? FeltZero
  : MultiplyBody<A, B, FeltZero>;

/**
 * We recursively add `A` to the result until `B` is "depleted".
 */
// prettier-ignore
type MultiplyBody<A extends Felt, B extends Felt, Result extends Felt> = 
  B extends FeltZero 
  ? Result // base-case
  : MultiplyBody<
    A, 
    FeltCast<Add<B, FeltMinusOne>>, 
    FeltCast<Add<Result, A>>>;
