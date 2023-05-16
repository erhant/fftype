import { expectType } from 'tsd';
import { Subtract } from '.';
import { ToInt4 } from '../int4';

// A - B where A = B
expectType<Subtract<ToInt4<5>, ToInt4<5>>>([0, 0, 0, 0]);
// A - B where B = 0
expectType<Subtract<ToInt4<4>, ToInt4<0>>>([0, 1, 0, 0]);
// A - B where A > B
expectType<Subtract<ToInt4<6>, ToInt4<4>>>([0, 0, 1, 0]);
expectType<Subtract<ToInt4<10>, ToInt4<8>>>([0, 0, 1, 0]);
expectType<Subtract<ToInt4<6>, ToInt4<3>>>([0, 0, 1, 1]);
expectType<Subtract<ToInt4<4>, ToInt4<3>>>([0, 0, 0, 1]);
// A - B where A < B (should underflow)
expectType<Subtract<ToInt4<4>, ToInt4<5>>>([1, 1, 1, 1]); // underflows
expectType<Subtract<ToInt4<2>, ToInt4<8>>>([1, 0, 1, 0]); // underflows
