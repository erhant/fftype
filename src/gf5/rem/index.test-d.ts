import { expectType } from 'tsd';
import { Rem } from '.';
import { ToInt4 } from '../../bits/int4/int4';

// equality
expectType<Rem<ToInt4<3>>>([0, 0, 1, 1]);
expectType<Rem<ToInt4<4>>>([0, 1, 0, 0]);
expectType<Rem<ToInt4<5>>>([0, 0, 0, 0]);
expectType<Rem<ToInt4<6>>>([0, 0, 0, 1]);
expectType<Rem<ToInt4<7>>>([0, 0, 1, 0]);
expectType<Rem<ToInt4<8>>>([0, 0, 1, 1]);
expectType<Rem<ToInt4<9>>>([0, 1, 0, 0]);
expectType<Rem<ToInt4<12>>>([0, 0, 1, 0]);
expectType<Rem<ToInt4<13>>>([0, 0, 1, 1]);
expectType<Rem<ToInt4<14>>>([0, 1, 0, 0]);
expectType<Rem<ToInt4<15>>>([0, 0, 0, 0]);
