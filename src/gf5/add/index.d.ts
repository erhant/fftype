import type { Felt, BitsAdd } from '../definitions';
import type { Rem } from '../rem';

/** Addition law in this field.
 *
 * We first add two numbers via the bitwise-addition guaranteed not to overflow.
 * Then, we take the remainder of that.
 */
export type Add<A extends Felt, B extends Felt> = Rem<BitsAdd<A, B>>;
