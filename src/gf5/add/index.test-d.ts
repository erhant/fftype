import { expectType } from 'tsd';
import { Add } from '.';
import { ToFelt } from '../felt';

// without overflow
expectType<Add<ToFelt<0>, ToFelt<0>>>([0, 0, 0, 0]);
expectType<Add<ToFelt<2>, ToFelt<2>>>([0, 1, 0, 0]);

// with overflow (w.r.t mod)
expectType<Add<ToFelt<2>, ToFelt<3>>>([0, 0, 0, 0]);
expectType<Add<ToFelt<3>, ToFelt<3>>>([0, 0, 0, 1]);
expectType<Add<ToFelt<1>, ToFelt<4>>>([0, 0, 0, 0]);
expectType<Add<ToFelt<4>, ToFelt<4>>>([0, 0, 1, 1]);
