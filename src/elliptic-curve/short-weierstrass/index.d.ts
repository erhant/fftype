import { Eq, Felt, Mul } from '../../finite-field';

type A = 1;
type B = 1;
// prettier-ignore
export type Curve<X extends Felt, Y extends Felt> = Eq<
  // y^2
  Mul<Y, Y>,
  // x^3              +  ((      a*x )+ b)
  Add<Mul<X, Mul<X, X>> ,Add<Mul<A, X>, B>>
  >
