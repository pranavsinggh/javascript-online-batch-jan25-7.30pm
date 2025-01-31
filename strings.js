//! String
//? It is the sequence of characters. It is enclosed between quotes (single quotes or double quotes) or backticks (` `)
//? Quotes work the same, it just that with single quote you should single quote only and other way also
//? Backticks are mostly for string interpolation (string template)

// let a = "Hello";
// console.log(a)

// let b='How'
// console.log(b)

// let c= a + "! " + b + " are you?"
// console.log(c)

//^ String interpolation - It is the accesing of varibles inside your string. It is done using backticks and to access your varaibles we will use ${}

// let d= `${a}! ${b} are you?`
// console.log(d)

// console.log(typeof d)

// let e= String("hey")
// console.log(e)
// console.log(typeof e)

// let f=new String("good")
// console.log(f)

//^ Property
//* length - used to find the length of the array

// console.log(c.length)

//^ Methods
//* toLowerCase - used to convert string to lower case. It returns a new string
//~ Syntax - string.toLowerCase()

// let a="HEY HOW ARE YOU?"
// console.log(a.toLowerCase())

//* toUpperCase - used to convert string to upper case. It returns a new string
//~ syntax - string.toUpperCase()

// let a = "hey how are you?";
// console.log(a.toUpperCase());

//* trimStart - used to remove the space from the starting of the string
//~ string.trimStart()

//* trimEnd - used to remove the space from the ending of the string
//~ string.trimEnd()

//* trim - used to remove the space from the starting and ending of the string
//~ string.trim()

// let a = "    Good morning    ";
// console.log(a);
// console.log(a.length);
// // console.log(a.trimStart())
// let x = a.trimStart();
// console.log(x);
// console.log(x.length);

// console.log(a.trimEnd());
// console.log(a.trimEnd().length);

// console.log(a.trim());
// console.log(a.trim().length);

//* substr - it is used to extract a part of string. It will return an extracted string. Length is optional. If we dont provide the length, it will extract till the end of string
//~ syntax - string.substr(startIndex,length)

let a = "Hello how are you?";
console.log(a.substr(6));

//* slice - it is used to extract a part of string. It will return the extracted string
//~ syntax - string.slice(startIndex,endIndex)

console.log(a.slice(6, 11));

//* subString - it is used to extract the part of string. It will return the extracted string
//~ syntax - string.subString(startIndex,endIndex)

console.log(a.slice(6, 11));
