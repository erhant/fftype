import { expectType } from 'tsd';
import { BitAdd, BitAdd3 } from '.';

// should add correctly
expectType<BitAdd<0, 0>>([0, 0]);
expectType<BitAdd<0, 1>>([0, 1]);
expectType<BitAdd<1, 0>>([0, 1]);
expectType<BitAdd<1, 1>>([1, 0]);
