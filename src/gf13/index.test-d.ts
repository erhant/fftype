import { expectType } from 'tsd';
import { Int4Add, Int4Sub } from '.';

// should add correctly
expectType<Int4Add<[1, 0, 0, 0], [1, 0, 0, 0]>>([0, 1, 0, 0]);
expectType<Int4Add<[1, 0, 1, 0], [1, 1, 0, 0]>>([0, 0, 0, 1]);
expectType<Int4Add<[1, 1, 0, 1], [1, 0, 1, 0]>>([0, 0, 0, 0]); // overflow
expectType<Int4Add<[0, 0, 0, 1], [0, 0, 0, 1]>>([0, 0, 0, 0]); // overflow, but not wrap around?

// should subtract correctly
expectType<Int4Sub<[1, 0, 0, 0], [1, 0, 0, 0]>>([0, 0, 0, 0]);
expectType<Int4Sub<[1, 0, 1, 0], [1, 1, 0, 0]>>([0, 1, 0, 0]);
expectType<Int4Sub<[1, 1, 0, 1], [1, 0, 1, 0]>>([0, 1, 1, 0]); // underflow
expectType<Int4Sub<[0, 0, 0, 0], [1, 0, 0, 0]>>([1, 1, 1, 1]); // underflow
