//! Events
//? These are the actions performed either by the browser or by the user
//? WE have so many kinds of events

//^ Mouse events
//? click, dblcick, mouseup, mousedown, mouseover, mouseout

//^ Key events
//? keypress, keydown, keyup

//^ Form events
//? submit, reset, focus, blur, change

//^ Window
//? load, resize, scroll

// let btn = document.createElement("button");
// btn.innerText = "Click me";

// let body = document.body;
// body.appendChild(btn);

// function click() {
//   console.log("Button is clicked");
// }

// console.dir(btn);

// btn.onclick = click;

// let div = document.querySelector("div");

//& Dom properties
//? We can provide event handlers, by the help of dom properties. This is a way of attaching events to an element
//~ Syntax - element.onEventName = function

// div.onclick = function () {
//   div.style.color = "white";
//   div.style.backgroundColor = "black";
// };

// div.ondblclick = function () {
//   console.log("The div is clicked doubletime");
// };

// div.onclick = function () {
//   console.log("The div is clicked single time");
// };
//? Using this approach for attaching to events to the element, we can not provide multiple functions. If we provide multiple functions, only the last one will be considered.

//& addEventListener()
//? This is the best way to attach event handlers to the element
//? By using this way, we can provide multiple functions for the same event

//~ Syntax - element.addEventListener("eventName",function,useCapture)

// let addCss = () => {
//   div.style.color = "white";
//   div.style.backgroundColor = "black";
// };

// div.addEventListener("click", addCss);

// div.addEventListener("click", () => {
//   console.log("The div is clicked single time");
// });

//? Using this we can remove the event from an element also

//& removeEventListener()
//? It is used to remove the event handlers from an element
//~ Syntax - element.removeEventListener("click",functionName)

// div.removeEventListener("click", addCss);

//TODO useCapture
//? It is the optional third argument in the addEventListener. It indicates something called as event propagation
//? Event propagation is the process of traversiong thorugh the dom elements, whenver the event occurs. It starts from the document and goes to the element on which the event occured and then back to the document. It has three phases
//* Event capturing - It is the traversing of the dom elements from parent to child
//* Event target - It is the element on which the event occured
//* Event bubbling - It is the traversing of the dom elements from child to parent

//? useCpature takes two values. Either true or false
//? true means event capturing, false means event bubbling (default)

let gp = document.querySelector("#grandParent");
let p = document.querySelector("#parent");
let c = document.querySelector("#child");

// gp.addEventListener(
//   "click",
//   () => {
//     console.log("Grand parent is clicked");
//   },
//   true
// );

// p.addEventListener(
//   "click",
//   () => {
//     console.log("Parent is clicked");
//   },
//   false
// );

// c.addEventListener(
//   "click",
//   () => {
//     console.log("Child is clicked");
//   },
//   true
// );

// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("Body is clicked");
//   },
//   false
// );

//^ Event object
//? So whenver a event occurs, browser itseld creates an objects, providing information about the event which is occured. This ovbject is automatically passed to the function handling the event, and we can access by passing a name for the first parameter

c.addEventListener("click", (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.type)
    e.preventDefault()
    e.stopPropagation()
})

//* target - The precise object on which the event occurred.
//* type - The type of the event, also known as the name of the event
//* preventDefault() - Prevents the default action associated with the event.
//* stopPropagation - Stops the event from propagating
