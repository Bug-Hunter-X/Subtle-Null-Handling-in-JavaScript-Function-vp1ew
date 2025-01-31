function foo(a, b) {
  //Explicitly check for null or undefined
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Handle null and undefined values
  }
  //Check if values can be safely coerced to numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; //Handle non-numeric input
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10
console.log(foo(0, 5)); // Output: 5
console.log(foo('',5)); // Output: NaN
console.log(foo(5,'')); // Output: NaN