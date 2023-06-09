<p align="center">
  <h1 align="center">
    <code>fftype</code>
  </h1>
  <p align="center">
    <code>finite-field arithmetic within the type system</code>
  </p>
</p>

<p align="center">
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="https://img.shields.io/badge/%E2%99%A5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
    <a>
    <a href="./.github/workflows/types.yml" target="_blank">
        <img alt="Workflow: types" src="https://github.com/erhant/fftype/actions/workflows/types.yml/badge.svg?branch=main">
    </a>
    
</p>

Start by installing dependencies with `yarn` or `npm i`. To run a function, assign its result to a type and simply "hover over" that type to see the results of "running" that function with some input.

### Implementations

We have the following existing implementations:

- [int4](./src/definitions/int4/): 4-Bit Non-Negative Integers
- [int5](./src/definitions/int5/): 5-Bit Non-Negative Integers
- [gf5](./src/definitions/gf5.d.ts): Galois Field of order 5
- [gf13](./src/definitions/gf13.d.ts): Galois Field of order 13

To use an implementation, simply export them at [`source.d.ts`](./src/source.d.ts).

### Writing an implementation

When writing an implementation for a new field of order $p$, one must do the following:

- Let $k$ be the minimum number of bits required to represent $p$.
- Implement $k+1$ bits bitwise arithmetic.
- Define the type of order in $k+1$ bits.
- Define the type of field elements in $k+1$ bits.

For example, consider the Galois Field of order 5. The number 5 is representable with 3 bits as 101, so:

- We must implement 4-bit arithmetic.
- We define `type Ford = [0, 1, 0, 1]` which is 5 in bitwise representation.
- We implement the field type `type Felt = [0, 1, 0, 0] | [0, 0, Bit, Bit]` which covers all bitwise representation of numbers `0, 1, 2, 3, 4`.

As another example, consider the Galois Field of order 13. The number 13 is representable with 4 bits as 1101, so:

- We must implement 5-bit arithmetic.
- We define `type Ford = [0, 1, 1, 0, 1]` which is 13 in bitwise representation.
- We implement the field type `type Felt = [0, 1, 1, 0, 0] | [0, 1, 0, Bit, Bit] | [0, 0, Bit, Bit, Bit]` which covers all bitwise representation of numbers `0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12`.

## Testing

Tests are done via [@type-challenges/utils](https://github.com/SamVerschueren/@type-challenges/utils), you can run them via `yarn test`. Note that testing is simply compiling everything and see if you get any errors.

## Status

- [x] Bitwise Operations
  - [x] Addition
  - [x] Subtraction
  - [x] Rotations
  - [x] Shifting
  - [x] Fills
  - [x] Logic
- [ ] Finite Field Arithmetic
  - [x] Addition
  - [x] Additive Inverse
  - [x] Multiplication
  - [ ] Multiplicative Inverse
  - [x] Subtraction via Additive Inverse
  - [ ] Division via Multiplicative Inverse
  - [x] Quotient
  - [x] Modulus
  - [x] Remainder
  - [x] Comparators

Any help is appreciated...

## Resources

- [Building Complex Types](https://medium.hexlabs.io/building-complex-types-in-typescript-804c973ce66f)
- [Tail Recursion in TS](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#tail-recursion-elimination-on-conditional-types)
