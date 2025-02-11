//! BOM - Browser Object Model
//? It allows us to communicate with the browser
//? It provides us with many object models like document, screen, history, navigator,location
//? Whatver is provided by the window(bom) object, can be accessed directly

console.log(window);

//^ document
//? It always represent the current html document. By using this we can make changes in the html document.
console.log(document);

//^ screen
//? It provides basic information about the screen
console.log(screen);

//^ history
//? It will keep a track of web pages you opened and it will store as history.
//? It gives us method like forward() - used to go one web page forward, back() - used to go one web page backward, go() - used to go n steps forward or backward
console.log(history);

//^ navigator
//? It provides information about browser
console.log(navigator);

//^ location
//? It provides basic information about the current path
console.log(location);

//& window methods
//^ setTimeout()
//^ setInterval()
//^ clearTimeout()
//^ clearInterval()

//^ prompt()
//? It is a way for taking input from the user.
// let data = prompt("Enter something");
// console.log(data)

//^ alert()
//? It is used to provide warning to the user
// alert("Warning");

//^ confirm()
//? It is used to confirm about any operation
let data = confirm("Do you want to do this?");
console.log(data);
