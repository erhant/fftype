import { expectType } from 'tsd';
import { BitLeftRotate, BitRightRotate } from '.';
import { Bit } from '../bit';

expectType<BitLeftRotate<[0, 0]>>([0, 0]);
expectType<BitLeftRotate<[0, 1]>>([1, 0]);
expectType<BitLeftRotate<[1, 0]>>([0, 1]);
expectType<BitLeftRotate<[1, 1]>>([1, 1]);

expectType<BitRightRotate<[0, 0]>>([0, 0]);
expectType<BitRightRotate<[0, 1]>>([1, 0]);
expectType<BitRightRotate<[1, 0]>>([0, 1]);
expectType<BitRightRotate<[1, 1]>>([1, 1]);

// opposite rotates should cancel out
expectType<BitLeftRotate<BitRightRotate<[1, 0, 1, 1, 0, 0]>>>([1, 0, 1, 1, 0, 0]);
