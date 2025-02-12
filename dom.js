//! DOM - Document object model
//? It is an interface to commuincate between document and javascript
//? document represents html code over the web page
//? by using dom, we can manipulate html tags, html attributes and css properties
//? whenever you run your html file on the browser or reload your web page, browser creates something called as document and it will be stored in the tree-like structure
//? Everything in dom, is present in the format of objects having some properties and methods provided by the browser

//& DOM Selectors

//^ getElementsByTagName()
//? It will select all the elements of the respective tag provided. It will return an array of all the respective tags in the html.
//~ Syntax - document.getElementsByTagName()

// let p=document.getElementsByTagName("div")
// console.log(p)

//^ getElementsByClassName()
//? It will select all the elements having the respective class. It will return an array of all the elements having the respective class
//~ Syntax - document.getElementsByClassName()

// let one=document.getElementsByClassName("one")
// console.log(one)

// let two=document.getElementsByClassName("two")
// console.log(two)

//^ getElementById()
//? It will select the element having the respective id. It will select the first matching element only, and we also should not provide same id to multiple elements. It will return the single first matching element having the respective id
//~ Syntax - document.getElementById()

// let first=document.getElementById("first")
// console.dir(first)

//^ querySelector()
//? It will select the element based upon the provided css query/selector. It will select the first matching element only, even for class and tags
//~ Syntax - document.querySelector("css selector")

// let id=document.querySelector("#first")
// console.log(id)

// let classElements=document.querySelector(".one")
// console.log(classElements)

// let tag=document.querySelector("p")
// console.log(tag)

//^ querySelectorAll()
//? It will select the elements based upon the provided css query/selector. It will select all the elements matching the css query
//~ Syntax - document.querySelectorAll()

let ids=document.querySelectorAll("#first")
console.log(ids)

let classes=document.querySelectorAll(".one")
console.log(classes)

let tags=document.querySelectorAll("p")
console.log(tags)