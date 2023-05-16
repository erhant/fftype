# FinitelyTyped

> The repository for type-level finite field arithmetic.

Name is obviously homage to [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped).

## Usage

Start by installing dependencies:

```sh
yarn
```

To run a function, assign its result to a type and simply "hover over" that typeto see the results of "running" that function with some input.

## Testing

Tests are done via [TSD](https://github.com/SamVerschueren/tsd), run them with:

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
  - [x] INT4 Addition
  - [x] INT4 Subtraction
  - [x] Rotations
  - [x] Shifting
  - [x] Logic
- [ ] Finite Field Arithmetic
  - [x] Addition
  - [x] Additive Inverse
  - [x] Multiplication (todo: use double-and-add)
  - [ ] Multiplicative Inverse
    - [ ] via Fermat's Little Theorem
    - [ ] via Extended Euclidean Algorithm
  - [ ] Exponentiation (todo: use square-and-mul)
  - [x] Subtraction (via additive inverse)
  - [ ] Division (via multiplicative inverse)
  - [x] Remainder
  - [x] Comparators
