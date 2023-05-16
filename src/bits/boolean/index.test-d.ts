import { expectType } from 'tsd';
import { BitAnd, BitNot, BitOr, BitXor } from '.';

expectType<BitAnd<0, 0>>(0);
expectType<BitAnd<0, 1>>(0);
expectType<BitAnd<1, 0>>(0);
expectType<BitAnd<1, 1>>(1);

expectType<BitOr<0, 0>>(0);
expectType<BitOr<0, 1>>(1);
expectType<BitOr<1, 0>>(1);
expectType<BitOr<1, 1>>(1);

expectType<BitXor<0, 0>>(0);
expectType<BitXor<0, 1>>(1);
expectType<BitXor<1, 0>>(1);
expectType<BitXor<1, 1>>(0);

expectType<BitNot<0>>(1);
expectType<BitNot<1>>(0);
