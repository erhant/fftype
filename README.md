<p align="center">
  <h1 align="center">
    <code>fftype</code>
  </h1>
  <p align="center">
    <code>{finite-field arithmetic within the type system}</code>
  </p>
</p>

## Usage

Start by installing dependencies:

```sh
yarn
```

To run a function, assign its result to a type and simply "hover over" that type to see the results of "running" that function with some input.

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

Tests are done via [@type-challenges/utils](https://github.com/SamVerschueren/@type-challenges/utils), run them with:

```sh
yarn test
```

## Styling

You can format and lint with the following commands:

```sh
yarn format
yarn lint
```

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
  - [ ] Extended Euclidean Algorithm
  - [ ] Exponentiation
  - [x] Subtraction
  - [ ] Division
  - [x] Quotient
  - [x] Modulus
  - [x] Remainder
  - [x] Comparators

## Implementations

- [int4](./src/definitions/int4/): 4-Bit Non-Negative Integers
- [int5](./src/definitions/int5/): 5-Bit Non-Negative Integers
- [gf5](./src/definitions/gf5.d.ts): Galois Field of order 5
- [gf13](./src/definitions/gf13.d.ts): Galois Field of order 13

## Resources

- [Building Complex Types](https://medium.hexlabs.io/building-complex-types-in-typescript-804c973ce66f)
