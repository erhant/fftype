/**
 * 0 or 1.
 */
export type Bit = 0 | 1;

/**
 * Least-significant bit.
 */
export type LSB<A extends Bit[]> = A extends [...infer U, infer B] ? B : A[0];

/**
 * Most-significant bit.
 */
export type MSB<A extends Bit[]> = A[0];
