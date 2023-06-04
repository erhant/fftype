/** 0 or 1. */
export type Bit = 0 | 1;

/** Least-significant bit. */
export type LSB<A extends Bit[]> = A extends [...infer _, infer B] ? B : A[0];

/** Most-significant bit. */
export type MSB<A extends Bit[]> = A[0];

/** Set MSB to be 1. This is used as a special trick. */
export type MSB1<A extends Bit[]> = A extends [infer _, ...infer Rest] ? [1, ...Rest] : [1];

/** Set LSB to be 1. This is used as a special trick. */
export type LSB1<A extends Bit[]> = A extends [...infer Rest, infer _] ? [...Rest, 1] : [1];
