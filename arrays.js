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

// //& Deletion -> It will leave empty places. We use delete operator for this
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

// let arr = [1, 2, 3, 4];
// console.log(arr);

//^ Method
//* push - it is used to add something at the last of your array. It returns the length of the updated array. It updates the original array
//~ Syntax - arrayName.push(element)

// let r = arr.push("Hello");
// console.log(arr);
// console.log(r);

//* pop - to remove element from the last index of the array. It returns the removed element.  It updates the original array
//~ Syntax - arrayName.pop()

// let r = arr.pop();
// console.log(arr);
// console.log(r)

//* shift - it is used to remove element from the first index of the array. It returns the removed element.  It updates the original array
//~ Syntax - arrayName.shift()

// let r=arr.shift()
// console.log(arr)
// console.log(r)

//* unshift - It is used to add element at the first index of the array. It returns the updated length array.  It updates the original array
//~ Syntax - arrayName.unshift(element)

// let r = arr.unshift(0);
// console.log(arr);
// console.log(r);

//* at - it returns the element at the provided index. We can pass negative index also and negative index starts form -1
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

//* concat - it is used to merge a new array in the existing array. it returns a new updated array
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

//* toString -  Used to convert array into string. It returns a string of elements present inside array, separated by comma
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

//* splice - used to update your array. It updateds my original array. It returns the array of deleted elements
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

// let r = arr.toReversed();
// console.log(r);
// console.log(arr);

//* sort - It is used to sort your array. It updates my original array and returns the updated orginal array. It sorts aplhabetically. If you want the array to be sorted numerically then you have to provide a callback function inside the sort method
//~ Syntax - arrayName.sort()

// arr = ["a", "x", "Hello", "hey", "c", "hello"];
// console.log(arr);
// let r = arr.sort();
// console.log(arr);
// console.log(r)

// arr = [1, 4, 7, 9, 5];
// console.log(arr);
// console.log(arr.sort());

// arr = [1, 100, 7, 700, 5, 300, 2, 9];
// console.log(arr);
// // console.log(arr.sort());        // It will sort lexicographically

// arr.sort((a, b) => a - b); // it will sort ascending order
// console.log(arr);
// arr.sort((a, b) => b - a); // It will sort descending order
// console.log(arr);

//* toSorted - it will sort the array, but it will not update the orginal array. It will return a new sorted array.
//~ Syntax - arrayName.toSorted()

// arr = [1, 100, 7, 700, 5, 300, 2, 9];
// let r1 = arr.toSorted((a, b) => a - b); // it will sort ascending order
// console.log(arr);
// console.log(r1);
// let r2 = arr.toSorted((a, b) => b - a); // It will sort descending order
// console.log(arr);
// console.log(r2);

//* indexOf - it is used to find the first matching index of the provided element> it returns the index of the element. If the element is not present it returns -1
//~ Syntax - arrayName.indexOf(element)

// arr = [1, 3, 5, 6, 2, 3, 1, 3, 4, 1];
// let r=arr.indexOf(7)
// console.log(r)

//* lastIndexOf - it is used to find the last matching index of the provided element. It returns the last index of the element. If the element is not present it returns -1
//~ Syntax - arrayName.lastIndexOf(element)

// arr = [1, 3, 5, 6, 2, 3, 1, 3, 4, 1];
// let r = arr.lastIndexOf(1);
// console.log(r);

//* includes - it is used to find wether the particulr element is present inside the array or not. It returns boolean value. If the element is present it returns true, otherwise it returns false
//~ Syntax - arrayName.includes(element)

// let r = arr.includes(7);
// console.log(r);

//^ Looping -
//& for loop, while loop, do-while loop

// let arr = [1, 4, 2, 6, 3, 8, 5, 9, 0];

//& for-in, for-of
//* for-in approach - it is used to iterate over the array by index

// for (let i in arr) {
//     console.log(i)
// }

//* for-of approach - it is used to iterate over the array by values

// for (let i of arr) {
//     console.log(i)
// }

//& Advanced array iteration methods

//* forEach - it is used to iterate over array by both index and element
//~ Syntax - arrayName.forEach((element,index,array)=>{
//~    })

// arr.forEach((element, index, array) => {
//   console.log("Element - " + element);
//   console.log("Index - " + index);
//   console.log("Array - " + array);
// });

// let arr = [1, 4, 2, 6, 3, 8, 5, 9, 0,3];
// let output=[]

// for (let i of arr) {
//     if (i < 5) {
//         output.push(i)
//     }
// }
// console.log(output)

// //* filter - it is used to filter out the elements of the array. It returns a boolean value for each iteration. If the boolean value is true and the element will be added inside the new array, if the value is false it will reject the element. It does not effect the original array, it returns a new filtered array
// //~ Syntax - arrayName.filter(fn)

// let r = arr.filter((element,index,array) => element < 5)
// console.log(r)

// let arr = [1, 4, 2, 6, 3, 8, 5, 9, 0, 3];
// let output = [];

// for (let i of arr) {
//   output.push(i * i);
// }
// console.log(output);

//* map - it is used to update the each element of the array. It doesnt updates the original array. It returns the new updated array.
//~ Syntax - arrayName.map(fn)

// let r = arr.map((element, index, array) => element * element);
// console.log(r);

// let arr = [1, 4, 2, 6, 3, 8, 5, 9, 0, 3];
// let sum = 0;
// for (let i of arr) {
//   sum = sum + i;
// }
// console.log(sum);

//* reduce - it is used to reduce the array into a single element. It does not update the original array. It goes left to right. The initial value is optional, if we dont provide the initial value, It will take the first element of the array as the initial value
//~ Syntax - arrayName.reduce((accumulator,element,index,array)=>{},initialValue)

// let r = arr.reduce((sum, element, index, array) => {
//   console.log("Accumulator - " + sum);
//   console.log("Element - " + element);
//   console.log("Index - " + index);
//   console.log("Array - " + array);

//   return sum + element;
// });

//* reduceRight - it is used to reduce the array into a single element. It does not update the original array. It goes right to left. The initial value is optional, if we dont provide the initial value, It will take the first element of the array as the initial value
//~ Syntax - arrayName.reduceRight((accumulator,element,index,array)=>{},initialValue)

// let arr = ["S", "T", "R", "I", "N", "G"];

// let r = arr.reduce((acc, e) => acc + e);
// console.log(r)

// arr.reverse()
// console.log(arr)

// let o=arr.reduceRight((acc,e)=>acc+e)
// console.log(o)
