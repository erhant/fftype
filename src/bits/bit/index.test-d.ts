import { expectType } from 'tsd';
import { LSB, MSB } from '.';

// least-significant bit
expectType<LSB<[0, 1, 0]>>(0);
expectType<LSB<[0, 1, 1]>>(1);

// most-significant bit
expectType<MSB<[0, 0, 1]>>(0);
expectType<MSB<[1, 1, 0]>>(1);
