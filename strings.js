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

// let a = "Hello how are you?";
// console.log(a.substr(6));

//* slice - it is used to extract a part of string. It will return the extracted string. It supports negative index. If the starting index is greater than end index, it will return an empty string.
//~ syntax - string.slice(startIndex,endIndex)

// console.log(a.slice(6, 11));
// console.log(a.slice(-4, -1));
// console.log(a.slice(4, 0));

//* subString - it is used to extract the part of string. It will return the extracted string> it does not supports negative index, converts them to zero. If the starting index is greated than end index, it will swap the values.
//~ syntax - string.subString(startIndex,endIndex)

// console.log(a.slice(6, 11));
// console.log(a.substring(-4, 4));
// console.log(a.substring(4, 0));
// console.log(a.substring(0, 4));

//* replace - It is used to replace the old string with a new string. It returns a new updated string. It replaces the value for the first occurence only.
//~ Syntax - string.replace("oldCharacters","newCharacters")

// let a = "Hello how are you?, Hello";
// console.log(a);
// console.log(a.replace("Hello", "Hey"));

//* replaceAll - It is used to replace the old string with a new string. It returns a new updated string. It replaces the string at all occurences.
//~ Syntax - string.replaceAll("oldCharacters","newCharacters")

// console.log(a.replaceAll("Hello","Hey"))

//* split - Used to convert string into array. The string will be separated by the provided separator.
//~ Syntax - string.split(separator)

// let a = "This is a string"
// let arr=a.split(" ")
// console.log(arr)

//* conact - Used to join two or more strings. It will return a new updated string
//~ Syntax - string.concat(string1,string2,....)

// let a = "Hello";
// let b = "How";
// let c = "Hey";
// let d = " ";
// let r=a.concat(d, b, d, c);
// console.log(r)
// console.log(a)

//* indexOf - used to find the index value of string. It will return the index value. If we provide the start index, it will start seacrhing from the particular index
//~ Syntax - string.indexOf("characters",startIndex)

// let a = "Hello how are you?, Hello";
// console.log(a.indexOf("e", 2));

//* lastIndexOf - used to find the index value of string. It will return the index value. It will start searching from the end of the string.
//~ Syntax - string.lastIndexOf("characters",startIndex)

// console.log(a.lastIndexOf("Hello"));

//* includes - Used to find if the provided string is present in the main string or not. If present returns true, otherwise false
//~ Syntax - string.includes("characters")

// let a = "Hello how are you?, Hello";
// console.log(a.includes("Are"))

//* at - Used to return the character at the provided index. It accepts negative index also.
//~ Syntax - string.at(index)

// let a = "Hello how are you?, Hello";
// console.log(a.at(12));
// console.log(a.at(-11));

//* charAt - Used to return the character at the provided index. It does not accepts negative index, it returns empty string for that
//~ Syntax - string.charAt(index)

// let a = "Hello how are you?, Hello";
// console.log(a.charAt(12));
// console.log(a.charAt(-11));

//& ASCII - American Standard Code For Information Interchange.
//* charCodeAt - used to find the ascii value of the character present at the particular index. It returns ascii value.
//~ Syntax - string.charCodeAt(index)

// console.log(a.charCodeAt(12))

//* fromCharCode - Used to convert the ascii value to the character. It will return the character of the provided ascii value.
//~ Syntax - String.fromCharCode(ascii number)

console.log(String.fromCharCode(65))
