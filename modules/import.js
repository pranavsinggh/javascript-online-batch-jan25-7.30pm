//! Modules
//? It will help us to break down large amount of code into small pieces. So that it is easy to access, modify and manage the code.
//? Whenever we use import or export keywords in the js file, it will become a js module. So we have to specify type="module" in the respective script tag.
//? We have two type of exports --> Default export, Named export

//^ Default export
//? We can import the varible with any name. We can have only single default export from a file

// import obj from "./export.js"
// console.log(obj)
// import data from "./export.js"
// console.log(data)

//^ Named export
//? We can export multiple variables at a time. While importing, the identifier name should be same as the importing variable name. To import named export, we need to pass identifier inside the expression { identifier }. We can provide alias at the time of import, but we have to use it with that alias name only. We can provide alias name at the time of export also, but need to import with the alias name only
//? We can import all export at a time, by using * followed by an identifier name. It will return a module object, from which we can destructure the exported data

// import { obj2, obj3 } from "./export.js";
// console.log(obj2);
// console.log(obj3);

// import { obj2 as a, obj3 as b } from "./export.js";
// console.log(a);
// console.log(b);

// import { x, y } from "./export.js";
// console.log(x);
// console.log(y);

import * as all from "./export.js";
console.log(all);
let {x,y}=all
console.log(x)
console.log(y)
