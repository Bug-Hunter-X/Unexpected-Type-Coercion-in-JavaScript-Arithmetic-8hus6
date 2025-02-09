# Unexpected Type Coercion in JavaScript

This repository demonstrates a common JavaScript bug involving unexpected type coercion during arithmetic operations.  When adding a number and a string, JavaScript performs string concatenation instead of numerical addition, leading to potentially unexpected results. The `bug.js` file showcases this issue, while `bugSolution.js` offers a solution using strict type checking or explicit type conversion.

## How to Reproduce

1. Clone this repository.
2. Run `bug.js` using a JavaScript runtime (e.g., Node.js).
3. Observe the unexpected output due to type coercion.

## Solution

The `bugSolution.js` file demonstrates how to avoid this issue by using `parseInt()` or `Number()` to explicitly convert strings to numbers before performing arithmetic operations or by implementing type guarding.