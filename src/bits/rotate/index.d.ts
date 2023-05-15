import { Bit } from '../bit';

/**
 * Bitwise shift once
 */
export type BitLeftRotate<A extends Bit[]> = A extends [infer B, ...infer U] ? [...U, B] : never;

/**
 * Bitwise shift once
 */
export type BitRightRotate<A extends Bit[]> = A extends [...infer U, infer B] ? [B, ...U] : never;
