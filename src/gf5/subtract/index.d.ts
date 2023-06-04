import type { Add } from '../add';
import type { Felt } from '../definitions';
import type { AdditiveInverse } from '../inverse';

/** Subtraction, that is addition with inverse. */
export type Subtract<A extends Felt, B extends Felt> = Add<A, AdditiveInverse<B>>;
