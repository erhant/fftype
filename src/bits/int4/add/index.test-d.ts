import { expectType } from 'tsd';
import { Add } from '.';
import { ToInt4 } from '../int4';

// without overflow
expectType<Add<ToInt4<3>, ToInt4<9>>>([1, 1, 0, 0]);
expectType<Add<ToInt4<7>, ToInt4<1>>>([1, 0, 0, 0]);
expectType<Add<ToInt4<0>, ToInt4<0>>>([0, 0, 0, 0]);
expectType<Add<ToInt4<2>, ToInt4<2>>>([0, 1, 0, 0]);
expectType<Add<ToInt4<2>, ToInt4<3>>>([0, 1, 0, 1]);
// with overflow
expectType<Add<ToInt4<7>, ToInt4<9>>>([0, 0, 0, 0]);
expectType<Add<ToInt4<8>, ToInt4<10>>>([0, 0, 1, 0]);
expectType<Add<ToInt4<8>, ToInt4<10>>>([0, 0, 1, 0]);
// netural
expectType<Add<ToInt4<0>, ToInt4<0>>>([0, 0, 0, 0]);
expectType<Add<ToInt4<7>, ToInt4<0>>>([0, 1, 1, 1]);
