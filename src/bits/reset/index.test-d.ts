import { expectType } from 'tsd';
import { BitReset } from '.';

expectType<BitReset<[0, 1]>>([0, 0]);
expectType<BitReset<[1, 1]>>([0, 0]);
expectType<BitReset<[1, 1, 0, 1, 0]>>([0, 0, 0, 0, 0]);

expectType<BitReset<[0, 1], 1>>([1, 1]);
expectType<BitReset<[1, 1], 1>>([1, 1]);
expectType<BitReset<[1, 1, 0, 1, 0], 1>>([1, 1, 1, 1, 1]);
