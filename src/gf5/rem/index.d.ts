import { Int4 } from '../../bits/int4/int4';
import { Felt, Ford } from '../felt';
import { Int4Subtract } from '../../bits/';

/**
 * Returns A % M.
 * The bitsize (Int4) and order (Ford) is very important here.
 */
export type Rem<
  A extends Int4,
  Asub1M extends Int4 = Int4Subtract<A, Ford>, //      15 - 5 = 10
  Asub2M extends Int4 = Int4Subtract<Asub1M, Ford>, // 10 - 5 = 5
  Asub3M extends Int4 = Int4Subtract<Asub2M, Ford>, // 5  - 5 = 0
> = A extends Felt ? A : Asub1M extends Felt ? Asub1M : Asub2M extends Felt ? Asub2M : Asub3M;
