//! Function declaration (named function)
//? The way of creating function using function keyword and an identifier. We can call it using the identifer. It is hoisted in nature which means we can call the fucnction before decalaration also.
// greet();
// function greet() {
//   console.log("hello how are you?");
// }
// greet();

//! Anonymous function
//? A function does not having a function identifier, WE need to store this inside a variable and execute it with the help of that variable
// let a = function () {
//   console.log("Hello i am executed from an anonymous function");
// };
// a();

//! First class function
//? Wehenver a function is stored as a value to a variable or passed an argument or returned from a function is called as a first class function (we can say whenever a function is used as a value). We need to call the function by the variable name only, we can not invoke it with the function name. The stored function could be either anonymous function or named function. We can not access them before thier initialization
// let b = function () {
//   console.log("I am an anonymous first class function");
// };
// b();

// c()          //-> error, because function will be present after initialization
// let c = function named() {
//   console.log("I am a named first class function");
// };
// named()         // error -> internally the function is stored inside the variable, we can not call it with function identifier
// c()

//! Functional expression
//? The epxression of storing a function(first class function) inside a variable is called as a functional expression.
// let e = function () {
//   console.log("This is a functional expression");
// };
// e()

//! Arrow function
//? This is just a syntactic sugar of creating functions. Syntactic sugar means lesse syntax needs to be followed. They are mostly used as a callback function

// let f = () => {
//   console.log("This is an arrow function");
// };
// f();

//^ Parameters - For a single parameter, we dont need to provide parenthesis
// let g = a => {
//   return a * a;
// };
// console.log(g(10));

//^ Return statement - Implicit return - If there is a single line of code, the function will automatically return it, no need of curly braces and return keyword. If you use the curly braces, then return statement is necesssary.
// let h = (a, b) => a + b;
// console.log(h(10, 20));

// let i = () => "Implicit string return";
// console.log(i());

// let j = () => [10, 20, 30];
// console.log(j());

// let k = () => true;
// console.log(k());

//& How to implicitly return an object from an arrow function
// let l = () => ({ name: "Atul", age: 21 });
// console.log(l());

//TODO Difference between named function and arrow function
//~ Function created with function keyword has more syntax, while arrow function has less syntax to follow.
//~ Arrow function has implicit return
//~ Named functions can be invoked before initialization while arrow function cant.
//~ Function created with function keyword has arguments object while arrow function does not have.
//~ Arrow function does not have this binding. It takes the this of its lexical environment.

//* Arguments object
// function sum() {
//   console.log(arguments[0]);
//   console.log(arguments[1]);
//   console.log(arguments[0] + arguments[1]);
// }
// sum(10, 20);

// let product = () => {
//   console.log(arguments);
// };
// product(10, 20);

//! IIFE - Immediate Invoke Function Expression
//? It is a function which is excuted immediatley after it is defined.
//? Syntax - (function (parameters){ })(arguments)
//? It is a common way to prevent global scope pollution by creating private scope(local scope) for variables.
//? At the end provide a semi-colon
//? (function_area)(function_invokation)

// (function (a, b) {
//   console.log(a + b);
// })(10, 20);

// ((a, b) => {
//   console.log(a + b);
// })(40, 50);

// let x = ((a, b) => {
//   //   console.log(a + b);
//   return a + b;
// })(60, 70);

// console.log(x);

// let x = ((a, b) => a + b)(10, 20);

// console.log(x);

//! Nested function
//? A function return inside another function is called as a nested function.

// function gp() {
//   console.log("I am a grand parent function");

//   function p() {
//     console.log("I am a parent function");

//     function c() {
//       console.log("I am a child function");
//     }
//     c();
//   }
//   p();
// }
// gp();

console.log(window)
console.log(this)
