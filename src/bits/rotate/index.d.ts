import type { Bit } from '../bit';

/** Bitwise left-rotate once. */
export type BitLeftRotate<A extends Bit[]> = A extends [infer B, ...infer U] ? [...U, B] : never;

/** Bitwise right-rotate once. */
export type BitRightRotate<A extends Bit[]> = A extends [...infer U, infer B] ? [B, ...U] : never;
