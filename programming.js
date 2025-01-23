// // // let a = 10;
// // // let b = 20;

// // // let c= a+b
// // // console.log(c)

// // // let d=a-b
// // // console.log(d)

// // // let e=a*b
// // // console.log(e)

// // // let f=a/b
// // // console.log(f)

// // // let g = a % b
// // // console.log(g)

// // // let h = a ** b
// // // console.log(h)

// // // let a = 1;
// // // let b = 2;

// // // let c = ++a;       //  Pre increment
// // // console.log(a)
// // // console.log(c)

// // // let d = a++;        // Post increment
// // // console.log(d)
// // // console.log(a)

// // let a = 10;

// // let b = --a;        // Pre decrement
// // // console.log(a);
// // // console.log(b);

// // let c = a--;        // Post decrement
// // console.log(a);
// // console.log(c);

// // let a = 10;
// // let b = 20;

// // // a = a + b;
// // a += b; // --> a= a+b Addition assignment
// // console.log(a);

// // a = a - b;
// // a -= b; // Subtraction assignment

// // a = a * b;
// // a *= b; // Multiplication assignment

// // a = a / b;
// // a /= b; // Divison assignment

// // a %= b; // Remainder assignment

// // a **= b; // Power assignmnet

// // let a = 10;
// // let b = 20;

// // console.log(a == b);
// // console.log(a != b);
// // console.log(a > b);
// // console.log(a < b);
// // console.log(a >= b);
// // console.log(a <= b)

// // let a = 10;
// // let b = "10";

// // console.log(a == b);        // Check for value only
// // console.log(a === b)        // Check for value along with that check data types also

// // console.log(a != b)
// // console.log(a !== b)

// let x = 5;
// let y = 3;

// // let result = x < 6 && y < 5;     // And operator (&&)
// // console.log(result)

// // let result = x > 6 || y > 5;     // Or operator (||)
// // console.log(result)

// let result = !(x < 6);              // Not operator (!)
// console.log(result)

// Decision statements

// let age = 20;
// if (age >= 18) {
//   console.log("Eligible to vote");
// } else {
//   console.log("Not eligible to vote");
// }

// let a = 0;
// if (a > 0) {
//   console.log("Positive value");
// } else if (a < 0) {
//   console.log("Negative value");
// } else {
//   console.log("Zero");
// }

// let a = 10;
// if (a > 5) {
//   if (a % 2 == 0) {
//     console.log("Greater than 5 and even number");
//   } else {
//     console.log("Greater than 5 but odd number");
//   }
// }
// else {
//    if (a % 2 == 0) {
//      console.log("Less than 5 and even number");
//    } else {
//      console.log("Less than 5 but odd number");
//    }
// }

// Looping statements

// console.log("hello world")
// for (let a = 1; a <= 5; a++) {
//   console.log("hello");
//   // console.log("world")
// }
// console.log("Outside loop");

// let a = 0;
// while (a < 10) {
//   console.log(a);
//   a++;
// }

// let a = 0;
// do {
//   console.log(a);
//   a++;
// } while (a < 0);

// Control transfer statement
// Break
// for (let a = 0; a < 10; a++) {
//   console.log(a);
//   if (a == 5) {
//     break;
//   }
// }
// console.log("Outside my loop");

//Continue
// for (let a = 0; a < 10; a++) {
//   if (a == 5) {
//     continue;
//   }
//   console.log(a);
// }
// console.log("Outside my loop");

// Switch statement

// let trafficLight = "green";

// switch (trafficLight) {
//   case "green":
//     console.log("Continue driving");
//     break;
//   case "yellow":
//     console.log("Prepare to stop");
//     break;
//   case "red":
//     console.log("Stop");
//     break;
//   default:
//     console.log("Light is not working");
// }
