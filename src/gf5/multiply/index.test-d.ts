import { expectType } from 'tsd';
import { Multiply } from '.';
import { ToFelt } from '../felt';

// equality
expectType<Multiply<ToFelt<3>, ToFelt<3>>>([0, 1, 0, 0]);
expectType<Multiply<ToFelt<3>, ToFelt<2>>>([0, 0, 0, 1]);
expectType<Multiply<ToFelt<3>, ToFelt<2>>>([0, 0, 0, 1]);
expectType<Multiply<ToFelt<3>, ToFelt<0>>>([0, 0, 0, 0]);