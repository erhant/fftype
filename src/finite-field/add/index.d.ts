import type { Felt, BitsAdd } from '../definitions';
import type { Mod } from '../modulus';

/** Addition law in this field.
 *
 * We first add two numbers via the bitwise-addition guaranteed not to overflow.
 * Then, we take the remainder of that.
 */
export type Add<A extends Felt, B extends Felt> = Mod<BitsAdd<A, B>>;
