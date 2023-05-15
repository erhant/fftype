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

Using the finite field of $GF(13)$. The computations are kept as generic as possible, although the bit-length may be hardcoded at times.

- [x] Bitwise Operations
  - [x] Addition
  - [x] Subtraction
  - [x] Rotations
  - [x] Shifting
  - [x] Logic
- [ ] Finite Field Arithmetic
  - [ ] Addition
  - [ ] Additive Inverse
  - [ ] Multiplication (double-and-add)
  - [ ] Multiplicative Inverse
    - [ ] via Fermats Little Theorem
    - [ ] via Extended Euclidean Algorithm
  - [ ] Exponentiation (square-and-multiply)
  - [ ] Subtraction (via additive inverse)
  - [ ] Division (via multiplicative inverse)
  - [ ] Remainder
- [ ] Polynomials
  - [ ] Addition
  - [ ] Additive Inverse
  - [ ] Multiplication
  - [ ] Division (via polynomial long division)
  - [ ] Lagrange Interpolation
- [ ] Elliptic Curves (affine)
  - [ ] Short Weierstrass
    - [ ] Invert Point
    - [ ] Is in Curve?
    - [ ] Addition
      - [ ] Chord
      - [ ] Tangent
  - [ ] Montgomery
    - [ ] Invert Point
    - [ ] Is in Curve?
  - [ ] Twisted Edwards
    - [ ] Addition
    - [ ] Is in Curve?
