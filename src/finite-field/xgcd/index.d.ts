import type { Lt } from '../comparators';
import type { Felt } from '../definitions';
import type { Quot } from '../quotient';
import type { Sub } from '../subtract';
import type { Rem } from '../remainder';
import type { One, Zero } from '../utils';

/**
 * **Extended Euclidean Algorithm**
 *
 * Given `a, b`, this algorithm returns `gcd(a, b)` along
 * with `s` and `t` such that `gcd(a, b) = a*s + b*t`.
 *
 * Here is a reference Python implementation:
 *
 * ```py
 * def xgcd(a: int, b: int):
 *   assert(a >= b)
 *
 *   r_prev, r_cur = a, b
 *   s_prev, s_cur = 1, 0
 *   t_prev, t_cur = 0, 1
 *
 *   while r_cur != 0:
 *     quot = r_prev // r_cur
 *     rem = r_prev % r_cur
 *     s_next = s_prev - quot * s_cur
 *     t_next = t_prev - quot * t_cur
 *
 *     r_prev = r_cur
 *     r_cur = rem
 *     s_prev = s_cur
 *     s_cur = s_next
 *     t_prev = t_cur
 *     t_cur = t_next
 *
 * return r_prev, s_prev, t_prev
 * ```
 */
// export type XGCD<A extends Felt, B extends Felt> = Lt<A, B> extends false ? XGCDBody<A, B> : XGCDBody<B, A>;

// export type XGCDBody<
//   Rprev extends Felt,
//   Rcur extends Felt,
//   Sprev extends Felt = One,
//   Scur extends Felt = Zero,
//   Tprev extends Felt = Zero,
//   Tcur extends Felt = One,
//   Q extends Felt = Quot<Rprev, Rcur>,
// > = Rcur extends Zero
//   ? [Rprev, Sprev, Tprev]
//   : XGCDBody<Rcur, Rem<Rprev, Rcur>, Scur, Sub<Sprev, Mul<Q, Scur>>, Sub<Tprev, Mul<Q, Tcur>>>;
