import { BitFill, LSB1 } from '../../bits';
import { Felt, Ford } from '../definitions';

/** Cast to felt, reminding the compiler that things are OK. */
export type FeltCast<A> = A extends Felt ? A : Felt;

/** A Zero in the given bit-setting */
export type Zero = BitFill<Ford, 0>;

/** A One in the given bit-setting */
export type One = LSB1<Zero>;
