//! Storage API
//? It provides a way to store data diretcly over the user's web browser.
//? It stores the data in the format of key and value pair and the data should be in json format.
//? It provides two types of storage, local storage and session storage

//^ Session storage
//? It will store the data for that session only (for that window or tab only). If i close the tab/window the data will be lost and it is respective to that tab only, i can not access it from my other tab.

//^ Local storage
//? It will store the data permanently on the browser, even if i close my browser or tab, the data will not be lost. I can access the data from the other tabs also

//& To manipulate data in storage api, we have some methods
//* setItem()
//? Used to set item to the storage
//~ Syntax - localStorage.setItem("key","value")
//~ Syntax - sessionStorage.setItem("key","value")

localStorage.setItem("name", "Peter");
sessionStorage.setItem("name", "Peter");

//* getItem()
//? Used to fetch the value from the storage
//~ Syntax - localStorage.getItem("key")
//~ Syntax - sessionStorage.getItem("key")

console.log(localStorage.getItem("name"))
console.log(sessionStorage.getItem("name"))

//* removeItem()
//? Used to remove the particular key from the storage
//~ Syntax - localStorage.removeItem("key")
//~ Syntax - sessionStorage.removeItem("key")

localStorage.removeItem("name")
sessionStorage.removeItem("name")

//* clear()
//? Used to completely clear the storage
//~ Syntax - localStorage.clear()
//~ Syntax - sessionStorage.clear()