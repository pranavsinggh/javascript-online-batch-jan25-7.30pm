// let name1="Hritik"
// let name2="Hritik"
// let name3="Hritik"
// let name4="Hritik"
// let name5="Hritik"
// let name6="Hritik"
// let name8="Hritik"

//! Array
//? array is a collection of data stored inside a single variable name. It is an object
//? It is used to store homogenous or hetrogenous data

//^ Creation
//? 1. By using array literal = []
// let array = [1, 2, 3, 4, 5];
// console.log(array);

// let hetrogenousArray = [
//   1,
//   "Hello",
//   2.3,
//   true,
//   null,
//   [1, 2, 3],
//   function () {
//     console.log("Function inside an array");
//   },
// ];
// console.log(hetrogenousArray);

//? 2. using Array constructor -> Array()
// console.log(Array);

// let array1 = new Array();
// console.log(array1);

// let array2 = new Array(1, 2, 3, 4);
// console.log(array2);

// let array3 = new Array(6);
// console.log(array3);

// let array4 = Array(10, 20, 30);
// console.log(array4);

// let a = 20;

// console.log(typeof array1);
// console.log(Array.isArray(array1));
// console.log(Array.isArray(a));

//^ CRUD operations -> Creation, Insertion, Updation, Deletion
// //& Creation
// let arr = new Array(12);
// console.log(arr);

// //& Insertion in array - > arrayName[index]=value
// arr[0] = 10;
// arr[1] = 20;
// arr[2] = "Hello";
// arr[7] = 30;
// arr[20] = "Still inside array";

// console.log(arr);

// //& Updation -> arrayName[index]=value
// arr[0] = "How are you";
// console.log(arr);

// //& Deletion -> It will leave empty places
// delete arr[1];
// console.log(arr)

//^ Accessing
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr[2]);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//^ Properties
//* length -> used to find the length of the array(no. of element present inside array)
// console.log(arr.length);

let arr = [1, 2, 3, 4];
console.log(arr);

//^ Method
//* push - it is used to add something at the last of your array. It returns the length of the updated array
//~ Syntax - arrayName.push(element)

// let r = arr.push("Hello");
// console.log(arr);
// console.log(r);

//* pop - to remove element from the last index of the array. It returns the removed element
//~ Syntax - arrayName.pop()

// let r = arr.pop();
// console.log(arr);
// console.log(r)

//* shift - it is used to remove element from the first index of the array. It returns the removed element
//~ Syntax - arrayName.shift()

// let r=arr.shift()
// console.log(arr)
// console.log(r)

//* unshift - It is used to add element at the first index of the array. It returns the updated length array
//~ Syntax - arrayName.unshift(element)

// let r = arr.unshift(0);
// console.log(arr);
// console.log(r);

//* at - it returns the element at the provided index
//~ Syntax - arrayName.at(index)

// let r=arr.at(2)
// console.log(r)

// let array = Array(20);
// console.log(array);
// let r = array.at(6);
// console.log(r);

// let r = arr.at(-2);
// console.log(r);
// console.log(arr[-2])

//* concat - it is used to merge a new array in the existing array. it returns a new added array
//~ Syntax - arrayName.concat(array1,array2,array3,....)

// let a1 = [1, 2, 3, 4];
// let a2 = [9, 8, 7, 6];
// let a4 = [100, 200, 300];
// let a3 = a1 + a2;
// console.log(a3);

// let a3 = a1.concat(a2, a4);
// console.log(a1);
// console.log(a2);
// console.log(a3);

// let array = [1, 2, 3, 4];
// let a = 20;
// let b = array * a;
// console.log( b)

//* toString -  Used to convert array into string. It returns a string of elements preseng inside array, separated by comma
//~ Syntax - arrayName.toString()

// let r = arr.toString();
// console.log(arr);
// console.log(r);

// let array = ["Hey", "how", "are", "you?"];
// console.log(array.toString())

//* join - used to convert array into string. By default it returns the string separated by comma only, but if we provide an argument, the string will be separated by the argument
//~ Syntax - arrayName.join("separator")

// arr = ["Hey", "how", "are", "you?"];
// console.log(arr.join())
// console.log(arr.join(" "))
// console.log(arr.join("-"))
// console.log(arr.join("!"))
// console.log(arr.join(""))

//* flat - it creates a new array, with my array element concatentaed to a specifed depth
//~ Syntax - arrayName.flat(depth)

// arr = [
//   1,
//   2,
//   3,
//   [10, 20, 30],
//   ["a", "b", "c", [true, false]],
//   ["hey", "how", [null, undefined, [1000, 2000]]],
// ];
// console.log(arr.flat(1))
// console.log(arr.flat(2))
// console.log(arr.flat(3))
// console.log(arr.flat(Infinity))

//* splice - used to update your array. It updates my array. It returns the array of deleted elements
//~ Syntax - arrayName.splice(strating-index,deleteCount,item1,item2,item3....)

// let r = arr.splice(1, 2);
// console.log(r);
// console.log(arr);

// arr.splice(1,0,10,20,30)
// console.log(arr)

// arr.splice(1, 2, 10, 20, 30);
// console.log(arr);

//* slice - used to slice out a part of your array. It returns the new sliced array. Does not includes the element of last index
//~ Syntax - arrayName.slice(startingIndex,endingIndex)

// let r=arr.slice(0, 3);
// console.log(r);

//* reverse - it is used to reverse the array. It updates the original array. it returns the same array
//~ Syntax - arrayName.reverse()

// let r=arr.reverse()
// console.log(r)
// console.log(arr)

//* toReversed - it reverse the array, but does not updates the original array. returns the updated array
//~ Syntax - arrayName.toReversed()

let r = arr.toReversed();
console.log(r);
console.log(arr);
