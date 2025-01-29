//! Function declaration (named function)
//? The way of creating function using function keyword and an identifier. We can call it using the identifer. It is hoisted in nature which means we can call the fucnction before decalaration also.
// greet();
// function greet() {
//   console.log("hello how are you?");
// }
// greet();

//! Anonymous function
//? A function does not having a function identifier, We need to store this inside a variable and execute it with the help of that variable
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

//TODO Difference between function created with function keyword and arrow function
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
//? It is a function which is executed immediatley after it is defined.
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
//     return c;
//   }
//   // let x = p();
//   // console.log(x)
//   // x()
//   return p;
// }
// let x = gp();
// console.log(x);
// let y = x();
// console.log(y)
// y()

// console.log(window)
// console.log(this)

// let a = 10;
// let b = 20;
// let c = 30;
// // console.log(a, b, c);

// function grandParent() {
//   let x = 100;
//   let y = 200;
//   let z = 300;
// //   console.log("Global data " + a, b, c);
//   console.log("From grand parent " + x, y, z);

//   function parent() {
//     let p = 1000;
//     let q = 2000;
//     let r = 3000;
//     // console.log("Globally" + a, b, c);
//     console.log("From grand parent " + x);
//     console.log("From parent " + p, q, r);

//     function child() {
//       let e = 10000;
//       let f = 20000;
//       let g = 30000;
//       console.log("Globally" + a, b, c);
//       console.log("From grand parent " + x, y);
//       console.log("From parent " + p, q, r);
//       console.log("From child " + e, f, g);
//     }
//     child();
//   }
//   parent();
// }
// grandParent();

//! Lexical environment - It is the local memory of function along with lexical environment of the parent
//! Scope chain - Chain of all the lexical environment and the parent refrence.
//! Closure - the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). Closures are a result of lexical scoping.

// function counter() {
//   let count = 0;

//   function increment() {
//     count++;
//     console.log(count);
//   }

//   return increment;
// }
// let fn = counter();
// fn();
// fn();
// fn();

//? Whenever function is return from another function, they remembers their lexical environment (they remember where they are actually present)

// function counter() {
//   let count = 0;

//   return function () {
//     count++;
//     return count;
//   };
// }
// let increment1 = counter();
// console.log(increment1());
// console.log(increment1());
// console.log(increment1());

// let increment2=counter()
// console.log(increment2())
// console.log(increment2())
// console.log(increment2())

// function sum(a, b, c) {
//   return a + b + c;
// }
// let op1 = sum(10, 20, 30);
// console.log(op1);
// let op2 = sum(10, 20);
// console.log(op2);

//! Currying
//? It is a functional programming technique, where a function with multiple arguments, is tranformed into a series of function each taking a single argument.

// function outer(a) {
//   function middle(b) {
//     function inner(c) {
//       return a + b + c;
//     }
//     return inner;
//   }
//   return middle;
// }
// let first = outer(10);
// console.log(first);
// let second = first(20);
// console.log(second);
// let third = second(30);
// console.log(third);

// let output=outer(10)(20)(30)
// console.log(output)

//? Instaed of taking all the arguments at once, the curried function take the first argument and return a new function, which takes the second argument and returns a new function, which takes the third argument and so on, till all the arguments are recived and then it provides you with an output.
//? In simpler terms, currying breaks down the function taking multiple paramter into a a chain of functions taking single parameter at a time.

//! Generator function
//? Function that can pause and resume its exuction later is called as a generator function. It yields the value in the process

function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;

  return "Execution done";
}

let serial = generateNumbers();
console.log(serial);
let a = serial.next().value;
console.log(a);
console.log(serial.next().value);
console.log(serial.next().value);
console.log(serial.next().value);
