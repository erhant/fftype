import { Felt, ToFelt } from '../felt';
import { AdditiveInverse } from '../inverse';
import { Add } from '../add';
import { Lt } from '../comparators';

type Zero = ToFelt<0>;
type MinusOne = AdditiveInverse<ToFelt<1>>;
type CastFelt<A> = A extends Felt ? A : Felt; // just remind the compiler that things are ok

/**
 * Multiplication in this field.
 */
export type Multiply<A extends Felt, B extends Felt> = Lt<A, B> extends true
  ? Multiply<B, A>
  : B extends Zero
  ? Zero
  : MultiplyBody<A, B, Zero>;

/**
 * We recursively add `A` to the result until `B` is "depleted".
 */
// prettier-ignore
type MultiplyBody<A extends Felt, B extends Felt, Result extends Felt> = 
  B extends Zero
    ? Result // base-case
  : MultiplyBody<
    A, 
    CastFelt<Add<B, MinusOne>>, 
    CastFelt<Add<Result, A>>>;
