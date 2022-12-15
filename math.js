console.log("new math methods introduced in ES6");
console.log(Math.trunc(9.67));
console.log(Math.sign(-5));
// console.log(Math.sign(5));
// console.log(Math.sign(0));
// console.log(Math.cbrt(64));
// console.log(Math.sqrt(4));
// console.log(Math.log2(8));
// console.log(Math.log10(100));
console.log("Number methods");
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.isInteger(9));
// console.log(Number.isInteger(9.89)); // it's a floating point value
console.log(Number.isSafeInteger(90));
console.log(Number.isSafeInteger(9070790897809075976367893270878527));
// Safe integers are all integers from -(2^53 - 1) to +(2^53 - 1).
// This is safe: 9007199254740991. This is not safe: 9007199254740992.
