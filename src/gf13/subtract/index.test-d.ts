import { expectType } from 'tsd';
import { Subtract } from '.';
import { FeltToBits } from '../toBits';

// should add correctly
expectType<Subtract<FeltToBits<6>, FeltToBits<4>>>([0, 0, 1, 0]); // 2
expectType<Subtract<FeltToBits<10>, FeltToBits<8>>>([0, 0, 1, 0]); // 2
expectType<Subtract<FeltToBits<6>, FeltToBits<3>>>([0, 0, 1, 1]); // 3
