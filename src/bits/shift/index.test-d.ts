import { expectType } from 'tsd';
import { BitLeftShift, BitRightShift } from '.';
import { Bit } from '../bit';

expectType<BitLeftShift<[0, 0]>>([0, 0]);
expectType<BitLeftShift<[0, 1]>>([1, 0]);
expectType<BitLeftShift<[1, 0]>>([0, 0]);
expectType<BitLeftShift<[1, 1]>>([1, 0]);

expectType<BitRightShift<[0, 0]>>([0, 0]);
expectType<BitRightShift<[0, 1]>>([0, 0]);
expectType<BitRightShift<[1, 0]>>([0, 1]);
expectType<BitRightShift<[1, 1]>>([0, 1]);

// must end with 0 for this test
const b1: [...Bit[], 0] = [1, 0, 1, 1, 0, 0];
expectType<BitLeftShift<BitRightShift<typeof b1>>>(b1);

// must start with 0 for this test
const b2: [0, ...Bit[]] = [0, 0, 1, 1, 0, 1];
expectType<BitRightShift<BitLeftShift<typeof b2>>>(b2);
