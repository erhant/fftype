import type { Add } from '../add';
import type { Felt } from '../definitions';
import type { Neg } from '../negate';

/** Subtraction, that is addition with inverse. */
export type Sub<A extends Felt, B extends Felt> = Add<A, Neg<B>>;
