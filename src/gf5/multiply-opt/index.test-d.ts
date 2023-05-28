import { expectType } from 'tsd';
import { MultiplyOpt } from '.';
import { ToFelt } from '../felt';

// multiplication in GF(5)
expectType<MultiplyOpt<ToFelt<3>, ToFelt<3>>>([0, 1, 0, 0]);
expectType<MultiplyOpt<ToFelt<3>, ToFelt<2>>>([0, 0, 0, 1]);
expectType<MultiplyOpt<ToFelt<3>, ToFelt<4>>>([0, 0, 1, 0]);
expectType<MultiplyOpt<ToFelt<3>, ToFelt<0>>>([0, 0, 0, 0]);
