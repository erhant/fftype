import { expectType } from 'tsd';
import { Add } from '.';
import { FeltToBits } from '../toBits';

// should add correctly
type x = FeltToBits<9>;
expectType<Add<FeltToBits<3>, FeltToBits<9>>>([1, 1, 0, 0]); // 12
expectType<Add<FeltToBits<7>, FeltToBits<1>>>([1, 0, 0, 0]); // 8
expectType<Add<FeltToBits<0>, FeltToBits<0>>>([0, 0, 0, 0]); // 0
expectType<Add<FeltToBits<2>, FeltToBits<2>>>([0, 1, 0, 0]); // 4
expectType<Add<FeltToBits<2>, FeltToBits<3>>>([0, 1, 0, 1]); // 5
