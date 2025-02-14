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

// let p=document.getElementsByTagName("p")
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

// let ids=document.querySelectorAll("#first")
// console.log(ids)

// let classes=document.querySelectorAll(".one")
// console.log(classes)

// let tags=document.querySelectorAll("p")
// console.log(tags)

//& CRUD on HTML tags

//* Creation
//^ createElement()
//? It will create the respective element.
//~ Syntax - document.createElement("tag")

// let p = document.createElement("p");
// console.log(p);

// let body = document.body;

//^ appendChild()
//? Used to add the created element as the child of other element
//~ Synaxt - parent.appendChild(createdElement)

// body.appendChild(p);

// let h1 = document.querySelector("h1");
// h1.appendChild(p);

//* Retrieve
//^ DOM selectors

//* Updation
//^ innerText
//? It is used to add text to your element
//~ Syntax - element.innerText="text"

// p.innerText = "This is a js created paragraph";
// p.innerText = "<u>This is adding u tag to p</u>";

//^ innerHTML
//? It is used to add html to your element
//~ Syntax - element.innerHTML="html"

// p.innerHTML = "<u>This is adding u tag to p</u>";

//^ replaceChild()
//? It is used to replace the child of an element, by some other element
//~ Syntax - element.replaceChild(newElement,prevElement)

// let i = document.createElement("i");
// i.innerText = "This is an italic text element";

// h1.replaceChild(i, p);

//* Deletion
//^ removeChild()
//? It is used to remove the respective child from the element
//~ Syntax - element.removeChild(childElement)

// h1.removeChild(i);

//& CRUD on HTML attributes

// let h1 = document.querySelector("h1");

//* Creation/Updation
//^ setAttribute()
//? It is used to set attribute to your selected element if the attribute is not present. If the attribute is already present, it will update the value of that attribute
//~ Syntax - element.setAttribute("attribute","value")

// h1.setAttribute("id", "heading");
// h1.setAttribute("class", "navbar");

// h1.setAttribute("id", "navbarHeading");

//* Retrieve
//^ getAttribute()
//? It is used to get the value of the respective attribute of that element. It will return the value
//~ Syntax - element.getAttribute("attribute")

// let id = h1.getAttribute("id");
// console.log(id);

// let h1_class = h1.getAttribute("class");
// console.log(h1_class);

//* Deletion
//^ removeAttribute()
//? It is used to remove the respective attribute from the element
//~ Syntax - element.removeAttribute("attribute")

// h1.removeAttribute("id");

//TODO classList
//? It is used to handle multiple classes over an html element

// h1.setAttribute("class", "first");
// h1.setAttribute("class", "second");
// h1.setAttribute("class", "third");

//^ classList.add()
//? To add multiple classes to the element
//~ Syntax - element.classList.add("className")

// h1.classList.add("first")
// h1.classList.add("second")
// h1.classList.add("third")

//^ classList.remove()
//? It is used to remove the respective class only from the element
//~ Syntax - element.classList.remove("className")

// h1.classList.remove("second")

//^ classList.toggle()
//? It is used to toggle between classes, which means if the class is present it will remove it, if the class is not present it will add it
//~ Syntax - element.classList.toggle("className")

// h1.classList.toggle("second")
// h1.classList.toggle("second")
// h1.classList.toggle("second")
// h1.classList.toggle("second")

//& CRUD on CSS
let h1 = document.querySelector("h1");

//* Creation / Updation
//? It will add inline css
//^ setProperty()
//? It is used to set the particular css property to the element. It is a method
//~ Syntax - element.style.setProperty("property","value")

// h1.style.setProperty("color","red")
// h1.style.setProperty("background-color", "black")

//^ property
//? It is used to set the particular css property to the element. It is a property
//~ Syntax - element.style.property="value"

// h1.style.color="red"
// h1.style.backgroundColor="black"

//^ cssText
//? It is used to set multiple css properties at the same time
//~ Syntax - element.style.cssText = "property:value;property:value;property:value;...."

// h1.style.cssText = "color:red;background-color:black;";

//* Retrieve
//^ getPropertyValue()
//? It is used to get the value of the respective css property of that element
//~ Syntax - element.style.getPropertyValue("property")

// let color = h1.style.getPropertyValue("color");
// console.log(color);
// let bg_color = h1.style.getPropertyValue("background-color");
// console.log(bg_color);

//* Deletion
//^ removeProperty()
//? It is used to remove the particular property from the element
//~ Syntax - element.style.removeProperty("property")

// h1.style.removeProperty("background-color");
// h1.style.removeProperty("color");
