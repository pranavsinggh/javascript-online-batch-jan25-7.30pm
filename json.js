//! JSON
//? JSON stands for javascript object notation.
//? It is a very lightweight language for storage and interchange of data between 2 ends.
//? It stores the data in the format of string.
//? It is a format for storing and transporting the data.
//? It is language independent.
//? For json, we use .json extension

//^ Data types supported
//& Object, Array, String, Boolean, Number, Null

//^ Data types not supported
//& Function, Undefined, Symbol, Date, Math, Method, BigInt

//^ Rule
//& Key should always be in the string format.

//^ Difference between js object and json object
//& JS object - It is not mandatory that key should be string. It accepts all data type. It will store that data in its respective format

//& JSON object - It is mandatory that key should be string. It does not supports all data types. It will store data in the format of string

let obj = {
  name: "Peter parker",
  age: 21,
  isSuperHero: true,
  hobbies: ["Technology", "Soccerr"],
  address: {
    area: "Queens",
    city: "New york",
  },
};
console.log(obj)

//^ JSON methods

//* JSON.stringify - It is used to convert javascript data into json format
//~ Syntax - JSON.stringify(js-data)

let jsonData=JSON.stringify(obj)
console.log(jsonData)

//* JSON.parse - It is used to convert json data into javascript data
//~ Syntax - JSON.parse(json-data)

let jsData=JSON.parse(jsonData)
console.log(jsData)

