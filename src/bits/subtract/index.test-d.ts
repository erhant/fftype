import { expectType } from 'tsd';
import { BitSubtract } from '.';

// without borrow
expectType<BitSubtract<0, 0, 0>>([0, 0]);
expectType<BitSubtract<0, 1, 0>>([0, 1]);
expectType<BitSubtract<1, 0, 0>>([0, 1]);
expectType<BitSubtract<1, 1, 0>>([1, 0]);

// with borrow
expectType<BitSubtract<0, 0, 1>>([1, 1]);
expectType<BitSubtract<0, 1, 1>>([1, 0]);
expectType<BitSubtract<1, 0, 1>>([0, 0]);
expectType<BitSubtract<1, 1, 1>>([1, 1]);
