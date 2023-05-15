import { expectType } from 'tsd';
import { BitAdd } from '.';

// without carry
expectType<BitAdd<0, 0, 0>>([0, 0]);
expectType<BitAdd<0, 1, 0>>([0, 1]);
expectType<BitAdd<1, 0, 0>>([0, 1]);
expectType<BitAdd<1, 1, 0>>([1, 0]);

// with carry
expectType<BitAdd<0, 0, 1>>([0, 1]);
expectType<BitAdd<0, 1, 1>>([1, 0]);
expectType<BitAdd<1, 0, 1>>([1, 0]);
expectType<BitAdd<1, 1, 1>>([1, 1]);
