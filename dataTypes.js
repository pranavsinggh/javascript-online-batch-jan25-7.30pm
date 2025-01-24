//^ Primitive data types
//! Number
//? these are the values which can be processed and evaluated or calculated
let a = 10;
let b = 0.1;
let c = -3;
let d = -4.5;

//TODO typeOf
//? unary operator. It is used to check the data type of a variable (what type of data is present inside a variable)

console.log(a);
console.log(typeof a);

//! string
//? a series of letters and alphabets enclosed in quotation marks

let e = "Hello world";
console.log(e);
console.log(typeof e);

//! boolean
//? true and false values
let f = true;
console.log(f);
console.log(typeof f);

//! null
//? it is an empty value, not as a 0. Absence of a value
let g = null;
console.log(g)
console.log(typeof g)

//! undefined
//? declared variable which has not been asigned a value. Means absence of initial value
let h = undefined
console.log(h)
console.log(typeof h)

//! bigint
//? represents number values greater than limit of number (2^53-1)
let i=1234455678789900n
console.log(i)
console.log(typeof i)

//! symbol

//^ Non-primitive data types
//! object
//? store data in the format of key and value pair

let j = {
    name: "Akshay",
    age:24
}
console.log(j)
console.log(typeof j)

//! array
//? store multiple values in a single variable
let k=[1,2,3,4,5]
console.log(k)
console.log(typeof k)
console.log(Array.isArray(k))

//! function
//? reusable block of code, designed to do a particular task
function greet() {
    console.log("hey how are you?")
}
greet()
console.log(typeof greet)

//? typeOf operator always return a string value
console.log(typeof typeof a);

