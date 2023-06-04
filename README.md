# FinitelyTyped

> The repository for type-level finite field arithmetic.

Name is obviously homage to [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped).

## Usage

Start by installing dependencies:

```sh
yarn
```

To run a function, assign its result to a type and simply "hover over" that typeto see the results of "running" that function with some input.

When writing an implementation for a new field of order $p$, one must do the following:

- Implement $k+1$ bits bitwise arithmetic.
  - In other words, we want all arithmetic to happen in bitwise notation, but for all inputs the MSB is 0.
  - This enables us to do some tricks on comparators and addition.
- Define the type of order in $k+1$ bits.
- Define the type of field elements in $k+1$ bits.

For example, consider the Galois Field of order 5. The number 5 is representable with 3 bits as 101, so:

- We must implement 4-bit arithmetic.
- We define `type Ford = [0, 1, 0, 1]` which is 5 in Bitwise representation.
- We implement the field type `type Felt = [0, 1, 0, 0] | [0, 0, Bit, Bit]` which covers all bitwise representation of numbers `0, 1, 2, 3, 4`.

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

Using the finite field of $GF(5)$. The computations are kept as generic as possible, although the bit-length may be hardcoded at times. The field operations operate over bits, and we must make sure that $2(p - 1)$ is within our range to avoid overflows. For $GF(5)$, although all numbers are representable by 3-bits, we use 4-bit arithmetic.

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
    - [ ] via Fermat's Little Theorem
    - [ ] via Extended Euclidean Algorithm
  - [ ] Exponentiation
  - [x] Subtraction
  - [ ] Division
  - [x] Remainder
  - [x] Comparators

## Implementations

- 4-Bit Non-Negative Integers
- Galois Field of order 5

## Resources

- [Building Complex Types](https://medium.hexlabs.io/building-complex-types-in-typescript-804c973ce66f)
