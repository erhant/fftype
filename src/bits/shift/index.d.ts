import { Bit } from '../bit';

/**
 * Bitwise shift once
 */
export type BitLeftShift<A extends Bit[]> = A extends [Bit, ...infer U] ? [...U, 0] : never;

/**
 * Bitwise shift once
 */
export type BitRightShift<A extends Bit[]> = A extends [...infer U, Bit] ? [0, ...U] : never;
