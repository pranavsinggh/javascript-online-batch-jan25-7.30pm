//! Spread and rest operators
//? They both are syntactically same (lool alike)
//? These two opertators are declared by something called as three dots ( ... )

//^ Spread
//? It is used to unpack(spread) the data from an array or an object. It will allow use to copy data in efficient way

// let arr1 = [10, 20];
// let arr2 = [30, 40];

// let arr3 = arr1.concat(arr2);
// console.log(arr3);

// ...arr1 -> 10  , 20
// ...arr2 -> 30, 40

// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

// let obj1 = {
//   name: "Peter parker",
// };
// let obj2 = {
//   age: 19,
// };
// let obj3={...obj1,...obj2}
// console.log(obj3)

//^ Rest
//? It will pack the remaning values into a varible. It is used in function paramter, and destructuring. It should always be used at the last position

function fn(a, ...b) {
  console.log(a);
  console.log(b);
}
fn(1, 2, 3, 4, 5, 6);

let arr=[10,20,30,40,50]
let [a,b,...c]=arr
console.log(a)
console.log(b)
console.log(c)
