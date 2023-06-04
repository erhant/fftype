import type { Expect, Equal } from '@type-challenges/utils';
import type { Eq, Gt, GtEq, Lt, LtEq, NotEq } from '.';
import type { F } from '../testing';

type _ = [
  // equal
  Expect<Equal<Eq<F<3>, F<3>>, true>>,
  Expect<Equal<Eq<F<3>, F<7>>, false>>,
  // not-equal
  Expect<Equal<NotEq<F<3>, F<3>>, false>>,
  Expect<Equal<NotEq<F<3>, F<7>>, true>>,
  // less-than
  Expect<Equal<Lt<F<3>, F<3>>, false>>,
  Expect<Equal<Lt<F<3>, F<4>>, true>>,
  Expect<Equal<Lt<F<4>, F<3>>, false>>,
  Expect<Equal<Lt<F<0>, F<3>>, true>>,
  // less-than-equal
  Expect<Equal<LtEq<F<3>, F<3>>, true>>,
  Expect<Equal<LtEq<F<3>, F<4>>, true>>,
  Expect<Equal<LtEq<F<4>, F<3>>, false>>,
  Expect<Equal<LtEq<F<0>, F<3>>, true>>,
  // greater-than
  Expect<Equal<Gt<F<3>, F<3>>, false>>,
  Expect<Equal<Gt<F<3>, F<4>>, false>>,
  Expect<Equal<Gt<F<4>, F<3>>, true>>,
  Expect<Equal<Gt<F<0>, F<3>>, false>>,
  // greater-than-equal
  Expect<Equal<GtEq<F<3>, F<3>>, true>>,
  Expect<Equal<GtEq<F<3>, F<4>>, false>>,
  Expect<Equal<GtEq<F<4>, F<3>>, true>>,
  Expect<Equal<GtEq<F<0>, F<3>>, false>>,
];
