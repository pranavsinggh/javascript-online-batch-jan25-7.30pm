// var a = 10;
// let b = 20;
// const c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// //? Re-declaration
// var a = 100;
// // let b = 200;
// // const c = 300;

// //? Re-initialization
// a = 1000;
// b = 2000;
// // c = 3000;

// console.log(a)
// console.log(b)
// console.log(c)

// //? Declaration and initialization
// var x;
// x=98
// let y;
// y = 99;
// const z = 100;

//& Accessible
// console.log(a)
// var a = 10;
// console.log(a)

//& Temporal dead zone - let and const
// console.log(b)
// let b = 20;
// console.log(b)


// let b;
// console.log(b)
// b = 20
// console.log(b)

//? Block scope
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// console.log(a);
// console.log(b);
// console.log(c);

//? Function scope
// function sum() {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// sum()

// a = 10;
// console.log(a)

//? Variable shadowing
var a = 10;
let b = 20;
console.log(a)
console.log(b)
{
    var a = 100;
    let b = 200;
    console.log(a)
    console.log(b)
}
console.log(a)
console.log(b)
