// console.log(5 + 3);
// console.log(5 - 3);

//! implicit conversion
// console.log(5 + "3"); // -> concatination happens, number is converted into string
// console.log(5 - "3"); // -> coercion (implicit type conversion) happens, numeric string converts to number

//? Whenever a numberic string encounters a operator other than + (concatination), it will get automatically converted in number data type

// console.log("3" * 10);
// console.log("31a" - 10); // -> alphanumeric string performing an operation with number, not possible gives NaN
// console.log(typeof NaN);

//! explicit conversion
// let a = 1;
// console.log(typeof a);
// let b = String(a);
// console.log(typeof b);
// let c = Number(b);
// console.log(typeof c);
// let d = Boolean(c);
// console.log(typeof d);

// let x = "21";
// let y = parseInt(x);
// console.log(typeof y);
// let z = parseFloat(x);
// console.log(z);

//! Truthy and false
// console.log("5" - true);
// console.log("5" - null);
// console.log("hello" + "hii");
// console.log("hello" - "hii");

console.log(1 < 2);
console.log(2 < 3);
console.log(1 < 2 < 3);
console.log(1 > 2 > 3);
console.log(3 > 1 > 2);
