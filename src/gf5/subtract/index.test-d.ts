import { expectType } from 'tsd';
import { Subtract } from '.';
import { ToFelt } from '../felt';

// without underflow
expectType<Subtract<ToFelt<0>, ToFelt<0>>>([0, 0, 0, 0]);
expectType<Subtract<ToFelt<2>, ToFelt<2>>>([0, 0, 0, 0]);
expectType<Subtract<ToFelt<2>, ToFelt<1>>>([0, 0, 0, 1]);
expectType<Subtract<ToFelt<3>, ToFelt<1>>>([0, 0, 1, 0]);
expectType<Subtract<ToFelt<4>, ToFelt<2>>>([0, 0, 1, 0]);

// with underflow
expectType<Subtract<ToFelt<0>, ToFelt<1>>>([0, 1, 0, 0]);
expectType<Subtract<ToFelt<2>, ToFelt<4>>>([0, 0, 1, 1]);
expectType<Subtract<ToFelt<0>, ToFelt<4>>>([0, 0, 0, 1]);
