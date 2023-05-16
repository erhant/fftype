import { expectType } from 'tsd';
import { Eq, Gt, GtEq, Lt, LtEq, NotEq } from '.';
import { ToFelt } from '../felt';

// equal
expectType<Eq<ToFelt<3>, ToFelt<3>>>(true);
expectType<Eq<ToFelt<3>, ToFelt<7>>>(false);

// not-equal
expectType<NotEq<ToFelt<3>, ToFelt<3>>>(false);
expectType<NotEq<ToFelt<3>, ToFelt<7>>>(true);

// less-than
expectType<Lt<ToFelt<3>, ToFelt<3>>>(false);
expectType<Lt<ToFelt<3>, ToFelt<4>>>(true);
expectType<Lt<ToFelt<4>, ToFelt<3>>>(false);
expectType<Lt<ToFelt<0>, ToFelt<3>>>(true);

// less-than-equal
expectType<LtEq<ToFelt<3>, ToFelt<3>>>(true);
expectType<LtEq<ToFelt<3>, ToFelt<4>>>(true);
expectType<LtEq<ToFelt<4>, ToFelt<3>>>(false);
expectType<LtEq<ToFelt<0>, ToFelt<3>>>(true);

// greater-than
expectType<Gt<ToFelt<3>, ToFelt<3>>>(false);
expectType<Gt<ToFelt<3>, ToFelt<4>>>(false);
expectType<Gt<ToFelt<4>, ToFelt<3>>>(true);
expectType<Gt<ToFelt<0>, ToFelt<3>>>(false);

// greater-than-equal
expectType<GtEq<ToFelt<3>, ToFelt<3>>>(true);
expectType<GtEq<ToFelt<3>, ToFelt<4>>>(false);
expectType<GtEq<ToFelt<4>, ToFelt<3>>>(true);
expectType<GtEq<ToFelt<0>, ToFelt<3>>>(false);
