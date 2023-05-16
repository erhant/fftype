import { Add } from '../add';
import { Felt } from '../felt';
import { AdditiveInverse } from '../inverse';

/**
 * Addition with inverse.
 */
export type Subtract<A extends Felt, B extends Felt> = Add<A, AdditiveInverse<B>>;
