function foo(a, b) {
  // Explicit type conversion using parseInt
  a = parseInt(a, 10);
  b = parseInt(b, 10);

  if(isNaN(a) || isNaN(b)) {
    return 0; // Handle cases where conversion fails
  }
  return a + b;
}

console.log(foo(1, '1')); // Output: 2
console.log(foo('1', 1)); // Output: 2
console.log(foo(1, 2)); // Output: 3