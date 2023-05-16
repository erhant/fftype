import { Felt } from '../felt';
import { Int4Add } from '../../bits/int4';
import { Rem } from '../rem';

/**
 * Addition law in this field.
 */
export type Add<A extends Felt, B extends Felt> = Rem<Int4Add<A, B>>;
