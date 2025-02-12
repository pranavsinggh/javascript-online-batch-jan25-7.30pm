//! Synchronus js
// console.log("Start");
// console.log("Processing");
// console.log("End");

// console.log("Start")
// for (let i = 0; i < 9999999999; i++){

// }
// console.log("End")

//! Asynchronus js

//^ Timer functions
//? Used for executing a task or a function at a particular time.
//? Either we can delay the execution or we can perform the execution regulary at a particular time interval
//? setTimeout() and setInterval()

//& setTimeout()
//? used to delay the execution of the code.
//~ Syntax - setTimeout(fn,delay,parameters....)
//? First argument is the function to be delayed and second is the time period by which it should be delayed (milliseconds) 1s = 1000ms

// console.log("Start");
// setTimeout(
//   name => {
//     console.log("Processing");
//     console.log("Superhero is " + name);
//   },
//   2000,
//   "Peter parker"
// );
// console.log("End");

// function fn(name) {
//   console.log("Good evening " + name);
// }
// setTimeout(fn, 2000, "Charles");

//& setInterval()
//? used for executing your code at regular intervals
//~ Syntax - setInterval(fn,delay,parameters....)
//? First argument is the function to be executed at regular intervals and second is the time period by which it should be delayed for each execution (milliseconds) 1s = 1000ms

// console.log("Start");
// let id = setInterval(
//   name => {
//     console.log("Executed after every 2s");
//     console.log(name);
//   },
//   2000,
//   "Charles"
// );
// console.log("End");
// console.log(id);
// setTimeout(() => {
//   clearInterval(id);
// }, 7000);

//? So both setInterval() and setTimemout(), returns a unqiue id. These id's can be used by clearInterval() and clearTimeout() respectively to clear the timer or stop the execution beforehand

//! AJAX
//? Asynchronus javascript and xml
//? It is a technique used to send or fetch data from server asynchronusly, without reloading the web page. It enables dynamic updates to a webpage
//? It uses browser built in XMLHttpRequest and DOM

// const cart = ["Shoes", "Shirts", "Kurtas"];

// createOrderAPI(cart, function () {
//   proceedToPaymentAPI(orderID, function () {
//     showOrderSummaryAPI(paymentInfo, function () {
//       updateWalletBallanceAPI();
//     });
//   });
// });

//TODO Callback hell (Pyramid of DOOM)
//? One callback inside another callback, and our code starts to grow horizonatally instead of vertically. This is unreadable and unmaintainable. It leads to something called as inversion of control - We loose the control of code when we use callback
//? Asynchronus programming exist because of callback

//& Promises
//? It is an inbuilt object which represents the eventual completion of an asynchronus operation.
//? It provides a cleaner alternative to your callback based asynchronus programming.

//? Promise constructor, requires a callback function. The callback function accepts two paramters which are 1st paramter is for positive case(fulfilled state) and 2nd parameter is for negative case (rejected state)

// let success = Math.floor(Math.random() * 10);

// let myPromise = new Promise((resolve, reject) => {
//   console.log(success);
//   if (success > 5) {
//     resolve("Promise is resolved");
//   } else {
//     reject("Promise is rejected");
//   }
// });
// console.log(myPromise);

//? Promise will hold the data, we need to consume the data. For that we have some methods like then(), catch(), finally() - Used for consuming the promise or handling the promise.
//? then will be executed if the promise is in the fulfilled state. It requires a callback function with a paramter, in which i will get the value.
//? catch will be executed if the promise is in the rejected state. It requires a callback function with a paramter, in which i will get the error. Whenver your promise is rejected you will get a error, need to hanled it with the catch method.
//? finally will be executed if the promise is settled. It requires a callback function.

// myPromise
//   .then(data => {
//     console.log(data);
//     console.log("Promise get resolved");
//   })
//   .catch(error => {
//     console.log(error);
//     console.log("Promise got rejected");
//   })
//   .finally(() => {
//     console.log("Promise handled");
//   });

//? It handles callback hell, by using something called as promise chaining
//? Whenver we return anything from a promise or then, catch, finally it returns a promise only
//? Either we can a return a promise or we can return a value, if we return a value by default it will be in the resolved state.

// const cart = ["Shoes", "Shirts", "Kurtas"];

// createOrderAPI(cart)
//   .then(order => {
//     return proccedToPaymentAPI(order);
//   })
//   .then(paymentInfo => {
//     return showOrderSummaryAPI(paymentInfo);
//   })
//   .then(orderInfo => {
//     return updateWallletBalanceAPI(orderInfo);
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => console.log(err));

// let success = Math.floor(Math.random() * 10);
// console.log(success);

// let promise = new Promise((resolve, reject) => {
//   if (success > 2) {
//     resolve("1st promise got resolved");
//   } else {
//     reject("1st promise got rejected");
//   }
// });
// promise
//   .then(data => {
//     console.log(data);
//     return new Promise((resolve, reject) => {
//       if (success > 4) {
//         resolve("2nd promise got resolved");
//       } else {
//         reject("2nd promise got rejected");
//       }
//     });
//   })
//   .then(data => {
//     console.log(data);
//     return new Promise((resolve, reject) => {
//       if (success > 6) {
//         resolve("3rd promise got resolved");
//       } else {
//         reject("3rd promise got rejected");
//       }
//     });
//   })
//   .then(data => {
//     console.log(data);
//     return new Promise((resolve, reject) => {
//       if (success > 8) {
//         resolve("4th promise got resolved");
//       } else {
//         reject("4th promise got rejected");
//       }
//     });
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//^ Promise methods
//* resolve() - It will create a promise and immediatley resolve the promise
//~ Syntax - Promise.resolve(data)

// let p=Promise.resolve("My promise is resolved")
// console.log(p)

//* reject() - It will create a promise and immediatley reject the promise
//~ Syntax - Promise.reject(data)

// let p=Promise.reject("My promise is rejected")
// console.log(p)

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("1st promise resolved");
//   }, 2000);
// });

// let p2 = Promise.resolve("2nd promise got resolved");

// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("3rd promise got rejected");
//   }, 1000);
// });

// let p4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("4th promise got resolved");
//   }, 3000);
// });

// let p5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("5th promise got rejected");
//   }, 4000);
// });

//* all() - It will take an array of promises, and it will wait for all of them to be settled. Then it will check are all the promises fulfilled, if yes then return the resolved data of all the promises, otherwise return the first rejected promise. It will return a promise only, need to consume it.
//~ Syntax - Promise.all([promise1,promise2,promise3.....])

// Promise.all([p1, p2, p4])
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//* allSettled() - It will take an array of promises and it will wait for all of them to be settled. Once settled it will return their respective data. It will also return a promise need to consume it
//~ Syntax - Promise.allSettled([promise1,promise2,promise3.....])

// Promise.allSettled([p1, p2, p3, p4, p5])
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//* any() - It will return the first resolved promise. If all of the promise are rejecetd, then it will give an error. It will return a promise need to consume it.
//~ Syntax - Promise.any([promise1,promise2,promise3.....])

// Promise.any([p1, p2, p3, p4, p5])
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//* race() - It will return the first settled promise. It will return a promise need to comsume it.
//~ Syntax - Promise.race([promise1,promise2,promise3.....])

// Promise.race([p1,  p3, p4, p5])
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//& Async/Await
//? It is modern javascript feature, used to simplify consuming promises, making asynchronus code look more synchronus
//? async - It will make a function asynchronus, and whatever we return from the function will be considered as a promise.
//? await - Pauses the execution of an async function, until the promise gets setttled. Can only be used with async

//? Cleaner and more readable code compare to promise chaining. Simplifies error handling

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise got resolved");
//   }, 4000);
// });

// let fn = async function () {
//   console.log("start");
//   try {
//     let data = await promise;
//     console.log(data);
//   } catch (error) {
//     console.log(error)
//   }
//   console.log("end");
// };
// fn();

//! fetch
//? It is a fetch api, which provides an easy to use interface for making your http requests. It is built into modern browsers and allow for asynchronus commuinication with server.
//? It is used to make api calls.
//? By default it will return a promise, that we need to consume by using either then/catch or async/await
//~ Syntax - fetch("url")

// let apiCall = fetch("https://api.github.com/users");
// apiCall
//   .then(data => {
//     console.log(data);
//     return data.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// let fn = async function () {
//   try {
//     let result = await fetch("https://api.github.com/users");
//     console.log(result);
//     let data = await result.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// fn();
