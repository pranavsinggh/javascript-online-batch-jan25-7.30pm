//! Objects
//? It is the programmatically represenation of real world entity.
//? Every entity has some properties and behaviour, same thing we can do by objects also.
//? Objects also have properties, and methods.

//~ Syntax
// object = {
//   key1: value,
//   key2: value,
// };
//? Combination of key and value pair separated by colon is called as property. Object can have multiple properties separated by comma.

// let team = "Marvels";
// let superHero = {
//   name: "Peter Parker",
//   age: 24,
//   isSuperhero: true,
//   isMarried: undefined,
//   hobbies: ["saving world", ["computer", "laptop"]],
//   address: {
//     street: "James street",
//     area: "Queens",
//     city: "New york",
//     country: "USA",
//   },
//   shootsWeb: function () {
//     console.log("Shoots web from his wrist");
//   },
//   climbsBuilding() {
//     console.log("he can climb a building");
//   },
//   age: 22,
//   team,
//   1: null,
// };
// console.log(superHero);

//? Whenver we provide a function to a object, it is called a method of that object.
//? Original order of properties is not maintained
//? If two or more properties have the same key, last one will be taken.
//? The keys are stored as string internally
//? You can pass variables as value also.

//^ Rules for creating keys
//& Key can not start with a number but can contain a number
//& Can contain only two special sybmobls - $ , _
//& We can give keywords as key also
//& Can provide only numeric key
//& If you want to provide any special characters explicitly, you can provide the key as string

// let person = {
//   name1: "Diwakar",
//   $age: 25,
//   true: "Single",
//   50000: "Salary",
//   "his hoobies":["development","testing"],
// }

//^ Accessing object properties

//& Dot notation ( . )
// console.log(superHero.name);
// console.log(superHero.hobbies);
// console.log(superHero.isSuperhero);
// console.log(superHero.address.country);
// console.log(superHero.hobbies[1][1]);
// superHero.shootsWeb();
// superHero.climbsBuilding();

// console.log(superHero.sports); // If the property is not present in the object, it returns undefined.
// console.log(superHero.1)      // We can not access numeric keys by using dot notation

// Dynamic accessing a property is not possible
// let property="name"
// console.log(superHero.property);

//& Bracket notation ( [] ) --> It allows dynamic accessing a property
// console.log(superHero["name"])
// console.log(superHero["hobbies"])
// console.log(superHero["address"])
// console.log(superHero["address"]["street"])
// console.log(superHero["address"].street)
// superHero["shootsWeb"]()
// superHero["climbsBuilding"]()
// console.log(superHero["1"]);

// let property="age"
// console.log(superHero[property])

//^ Updation
// superHero.age=27
// console.log(superHero)

// superHero.sports="Soccer"
// console.log(superHero)

//^ Deletion
// delete superHero.isMarried
// console.log(superHero)

//^ Prototype object
//? Whenever we creates an object inside your js, jre will automatically assign a hidden object to your current object, that is prototype object
//? We can access it using __proto__, by the instance of the object.
//? If we want to access it from the object, we can use the prototype property

// console.log(superHero.__proto__)

// let arr=[1,2,3,4]
// console.log(arr.__proto__)

// console.log(Array.prototype)

// function sum() {
//   console.log("calculating sum")
// }
// console.log(sum.__proto__)
// console.log(Function.prototype)

// let obj = {
//   firstName: "Tony",
//   lastName: "Stark",
//   printName() {
//     console.log("Printing name")
//   }
// }
// console.log(obj.__proto__)
// console.log(Object.prototype)

// console.log(arr.__proto__.__proto__)
// console.log(Object.prototype.__proto__)

// obj.printName()

//& Prototype chaining
//? Whenever we creates an object, a hidden object it assigned to that object, which is again an object so a hidden object is assigned to it also and it goes on. This is called as prototype chain.
//? At the top we have the Object and its prototype object points to null

//& Prototype inheritance
//? Whenever we try to access a property inside an object, it first find it inside the own object, if it is not present, then it will check inside its prototype object, if it is not even present there, then it will check inside the prototype's prototype object and so on, till it reaches the Object's prototype object which is null. If the property is found it will access it otherwise it will give an error. This is called as prototype inheritance.
// let obj1 = {
//   name: "Sashi",
//   city: "Bangalore",
// }
// console.log(obj1)
// console.log(obj1.__proto__)

// let obj2 = {
//   name:"Pooja"
// }
// console.log(obj2)
// console.log(obj2.__proto__)

//? We can modify the prototype object, by providing a new object to __proto__. But this is not at all advised, we should never do this.
// obj2.__proto__ = obj1
// console.log(obj2.__proto__)
// console.log(obj2.name)
// console.log(obj2.city)

//^ Method of object
// let obj = {
//   name: "Peter parker",
//   age: 19,
//   address:"New York"
// }
// console.log(obj)

//* hasOwnProperty - it is used to check wether a particular property is present inside your object or not. If present returns true else false.
//~ Syntax - objName.hasOwnProperty("property")

// console.log(obj.hasOwnProperty("name"))
// console.log(obj.hasOwnProperty("lastName"))

//TODO Instance methods are the methods that can be accessed by the instance of an object. They might be present in the prototype object also and accessed using prototype inheritance
//TODO Static methods are the method that can be access only by the class(Object,Array,Function). We can not see these methods

//* keys - It will return an array of all the keys present in the object
//~ Syntax - Object.keys(objName)

// console.log(Object.keys(obj))

//* values - It will return an array of all the values present in the object
//~ Syntax - Object.values(objName)

// console.log(Object.values(obj))

//* entries - It will return a nested array, where sub-array would be of key and value and there would be multiple arrays like this in the main array
//~ Syntax - Object.entries(objName)

// console.log(Object.entries(obj))

// obj.team = "Marvel"
// delete obj.address

//* seal - It is used to seal your object, which means we can not add or delete any property. We can access a property and we can modify already present property.
//~ Syntax - Object.seal(objName)

// Object.seal(obj)
// obj.team = "Marvel";
// console.log(obj)
// delete obj.address;
// console.log(obj)
// console.log(obj.name)

// obj.name="Steve rogers"
// console.log(obj)

//* isSealed - It is used to check wether my object is sealed or not. If sealed returns true else false
//~ Syntax - Object.isSealed(objName)

// console.log(Object.isSealed(obj))

//* freeze - It is used to freeze your object, which means we can not add a property, delete a property or modify a property. We can only access a property.
//~ Syntax - Object.freeze(objName)

// Object.freeze(obj)
// obj.team = "Marvel";
// console.log(obj);
// delete obj.address;
// console.log(obj);
// obj.name = "Steve rogers";
// console.log(obj);

// console.log(obj.name)

//* isFrozen - It is used to check wether my object is frozen or not. If frozen returns true else false
//~ Syntax - Object.isFrozen(objName)

// console.log(Object.isFrozen(obj))

// let obj = {
//   name: "Peter parker",
//   age: 19,
//   address: "New York",
// };
// obj.team = "Marvel";
// console.log(obj)

//* defineProperty - It is used to define (add) property to your object. All the extra properties other than value are optional, you can skip anyone
//~ Syntax - Object.defineProperty(objName,"key",{
//~             value:value,
//~             writable:boolean
//~             configurable:boolean
//~             enumerable:boolean
//~          })
//? writable - controls wether you can modify the particular property or not. By default it is false, which means we can no modify it, if we set it to true, we can modify it
//? configurable - controls wether you can delete the particular property or not. By default it false, which means we can not delete it, if we set it to true, we can delete it.
//? enumerable - controls wether we can iterate the particular property or not. By default it false, which means we can not iterate it, if we set it to true, we can iterate it. (can not be accessed by keys, entries, for in loop)

// Object.defineProperty(obj, "team", {
//   value: "Marvel",
// });
// console.log(obj)

// obj.name="Flash"
// console.log(obj)
// obj.team="DC"
// console.log(obj)
// delete obj.team
// console.log(obj)
// console.log(Object.keys(obj))

// Object.defineProperty(obj, "team", {
//   value: "Marvel",
//   writable: true,
//   configurable: true,
//   enumerable: true,
// });
// console.log(obj);

// obj.team = "DC";
// console.log(obj);
// console.log(Object.keys(obj));
// delete obj.team;
// console.log(obj);

// for (let i in obj) {
//   console.log(i)
// }

//* defineProperties - It is used to define multiple properties at the same time.
//~ Syntax - Object.defineProperties(objName,{
//~             key: {
//~               value: value,
//~               writable:boolean ,
//~               configuarble:boolean,
//~               enumerable:boolean,
//~             },
//~             key: {
//~               value: value,
//~               writable:boolean ,
//~               configuarble:boolean,
//~               enumerable:boolean,
//~             },
//~             ....
//~          })

// Object.defineProperties(obj, {
//   team: {
//     value: "Marvel",
//     writable: true,
//     configurable: true,
//     enumerable: true,
//   },
//   hoobies: {
//     value: ["Video games", "Soccer"],
//   },
// });
// console.log(obj);

//* getOwnPropertyDescriptior - It will return an object, describing the configuration of the specified property on the given object. It will check the property in the object only, not in its prototype object.
//~ Syntax - Object.getOwnPropertyDescriptior(objectName,"property")

// console.log(Object.getOwnPropertyDescriptor(obj,"name"))
// console.log(Object.getOwnPropertyDescriptor(obj,"team"))
// console.log(Object.getOwnPropertyDescriptor(obj, "hoobies"))

//* getOwnPropertyDescriptors -  It will return an object, describing configuration of all the properties present inside the object.
//~ Syntax - Object.getOwnPropertyDescriptiors(objectName)

// console.log(Object.getOwnPropertyDescriptors(obj))

//^ Ways to create object

//& Object literal
//? By using object literals ( { } )

// let obj = {
//   name: "Someone",
//   age: 400,
// };
// console.log(obj)

//& Object constructor
//? It gives a blueprint based on which different instances of object can be created. It returns an empty object, we can define our own properties.

// let obj1 = new Object();
// console.log(obj1);

// obj1.name = "Peter parker";
// obj1.age = 19;
// console.log(obj1);

// let obj2 = {
//   name: "Steve rogers",
//   age: 120,
// };

// let obj3 = {
//   name: "Tony Stark",
//   age: 60,
// };

//& Constructor function

// function Avenegers(name, age) {
//   this.name = name;
//   this.age = age;
// }
// // console.log(new Avenegers("Steve", 120));
// // console.log(new Avenegers("Tony", 60));
// // console.log(new Avenegers("Peter", 20));

// let captainAmerica = new Avenegers("Steve", 120);
// console.log(captainAmerica);
// console.log(captainAmerica.name);
// // captainAmerica.saveWorld()
// let ironMan = new Avenegers("Tony", 60);
// console.log(ironMan);
// // ironMan.saveWorld()
// let spiderMan = new Avenegers("Peter", 20);
// console.log(spiderMan);

// console.log(captainAmerica.__proto__);

// console.log(Avenegers.prototype);

// Avenegers.prototype.saveWorld = function () {
//   console.log("Saving world");
// };
// console.log(Avenegers.prototype);
// captainAmerica.saveWorld();

// let printDetails = function () {
//   console.log("Name " + this.name + " age " + this.age);
// };
// Avenegers.prototype.printDetails = printDetails;

// captainAmerica.printDetails()
//? While creating object, from a constructor, we have to use new keyword
//? this will point to the current object, but the value of this can be varied based upon where and how it is used

//& Class
//? Behind the scenes works like constructor function only, it is just syntactic sugar.
//? Class is a blueprint, based on which you can create an instance of the class (object)

// class Avenegers {
//   constructor(name, age) {
//     (this.name = name), (this.age = age);
//   }
//   saveWorld() {
//     console.log("Saving world");
//   }
//   printDetails() {
//     console.log("Name " + this.name + " age " + this.age);
//   }
//   team = "Marvels";

//   static greet() {
//     console.log("Welcome to avengers");
//   }
// }
// console.log(Avenegers.prototype);

// let captainAmerica = new Avenegers("Steve", 120);
// console.log(captainAmerica);
// captainAmerica.saveWorld();
// captainAmerica.printDetails();

// Avenegers.greet();

//TODO Inheritance

// class Employee {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Manager extends Employee {
//   constructor(name, age, sal) {
//     super(name, age);
//     this.sal = sal;
//   }
// }

// let emp = new Employee("xyz", 21);
// console.log(emp);

// let mgr = new Manager("abc", 28, 120000);
// console.log(mgr);

//& Object.assign
//? It is a method used to create your object. It will take multiple objects and merge into the first object provided as argument. It will update the first object. So if we dont want our object to be updated, we can pass an empty object as first argument.
//~ Syntax - Object.assign(target,source,source,source....)

// let obj1 = {
//   name: "Vishal",
// };
// let obj2 = {
//   age: 24,
// };
// let obj3 = {
//   salary: 40000,
// };
// Object.assign(obj1,obj2,obj3)
// console.log(obj1)

// let obj = {};
// Object.assign(obj, obj1, obj2, obj3);
// console.log(obj);
// console.log(obj3);

//& Object.create()
//? It will create an empty object and iw will add all the properties and methods of the provided object as prototye to new created empty object.
//~ Syntax - Object.create(obj)

// let parentObj = {
//   name: "Shiva",
//   age: 30,
//   printName() {
//     console.log(this.name);
//   },
// };
// console.log(parentObj);

// let obj = Object.create(parentObj);
// console.log(obj)

//& Factory function

// function createPerson(name, age) {
//   return {
//     name,
//     age,
//     greet() {
//       console.log("hello my name is " + this.name);
//     },
//   };
// }
// let person1=createPerson("Vishal",24)
// console.log(person1)
// person1.greet()

// let person2=createPerson("Shiva",30)
// console.log(person2)
// person2.greet()

//! this keywword
//? It is a keyword in javascript, which points to your current object.

//^ Global scope
//? In the global scope, this will point to the global object (window object)
// console.log(this);

//^ Function
//? In a function, this points to null or undefined. Whenver this is null or undefined, it is replaced by your global object.
// function greet() {
//   console.log(this);
// }
// greet();

//^ Arrow function
//? It takes the value from its lexical scope. Arrow function does not have its own this binding, it borrows this from its lexical scope
// let fn = () => {
//   console.log(this);
// };
// fn();

//^ Function as method
//? It will point to the current object
//^ Arrow function as a method
//? It will take the value of this from its lexical scope, so thats why we never use arrow functions as method or as constructor function

// let obj = {
//   name: "Vishal",
//   age: 24,
//   printDetails: function () {
//     console.log(this);
//   },
//   printDetailsArrow: () => {
//     console.log(this);
//   },
//   printDetailsNested: function () {
//     let arrow = () => {
//       console.log(this);
//     };
//     arrow();
//   },
// };
// obj.printDetails();
// obj.printDetailsArrow();
// obj.printDetailsNested();

//^ Constructor function, Class
//? It always point to the instance using it (current instance)
// function person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.details = function () {
//     console.log(this);
//   };
// }

// let p1=new person("Shiva",21)
// let p2 = new person("Vishal", 24)

// p1.details()
// p2.details()

//^ Static methods
//? this always point to the class

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;

//     this.printDetails = function () {
//       console.log(this);
//     };
//   }

//   static printDetailsStatic() {
//     console.log(this);
//     console.log(this.name)
//   }
// }

// let p1=new Person("Shiva",21)
// p1.printDetails()

// Person.printDetailsStatic()

//^ call, apply, bind
//? They are used to explicitly change the value of this. These are the methods present inside the Function prototype object.
//? They are used to borrow functions.

// let printDetails = function (hometwon, current) {
//   console.log(
//     `Hello my name is ${this.name} and my age is ${this.age}. I am from ${hometwon}, but currently i am in ${current}`
//   );
// };

// let obj1 = {
//   name: "Vishal",
//   age: 21,
//   // printDetails(hometwon, current) {
//   //   console.log(
//   //     `Hello my name is ${this.name} and my age is ${this.age}. I am from ${hometwon}, but currently i am in ${current}`
//   //   );
//   // },
// };
// obj1.printDetails("mumbai", "bengaluru");
// printDetails.call(obj1, "mumbai", "bengaluru");

// let obj2 = {
//   name: "Shiva",
//   age: 24,
// };

// obj1.printDetails.call(obj2, "Pune", "Hyderabad");
// printDetails.call(obj2, "pune", "hyderabad");

// printDetails.apply(obj1, ["mumabi", "bengaluru"]);
// printDetails.apply(obj2, ["pune", "hyderabad"]);

// let bindedfn = printDetails.bind(obj1, "mumbai");
// bindedfn("bangalore");
// bindedfn("gurugram");
// bindedfn("ahmedabad");

//& call - it will invoke the function immediatley. We use this when we know the exact number of arguments.
//& apply - it will invoke the function immediatley. We use this when we dont know the exact number of arguments.
//& bind - it will not invoke the function immediately, we can call the function later with dynamic arguments.

//! Math object
//? Inbuilt object provied by javascript, used for mathematical operation.

//^ Math.abs() - Used to find the absolute value
// console.log(Math.abs(41))
// console.log(Math.abs(-41))

//^ Math.round() - Used to round of your value, to the nearest value
// console.log(Math.round(3.6))
// console.log(Math.round(3.3))
// console.log(Math.round(-3.3))

//^ Math.floor() - Used to round off to the lower value
// console.log(Math.floor(3.4))
// console.log(Math.floor(3.9))
// console.log(Math.floor(-3.9))

//^ Math.ceil() - Used to round off to the upper value
// console.log(Math.ceil(3.4));
// console.log(Math.ceil(3.9));
// console.log(Math.ceil(-3.9));

//^ Math.pow() - Used to find the power value of a number
// console.log(Math.pow(2,3))
// console.log(Math.pow(4,6))

//^ Math.sqrt() - Used to find the square root
// console.log(Math.sqrt(64))
// console.log(Math.sqrt(128))

//^ Math.cbrt() - Used to find the cube root
// console.log(Math.cbrt(343))

//^ Math.min() - Used to find the minimum of the values
//^ Math.max() - Used to find the maximum of the values

// console.log(Math.min(1, 4, 2, 6, 8, 10, 400, 25, 0));
// console.log(Math.max(1, 4, 2, 6, 8, 10, 400, 25, 0));
 
//^ Math.trunc() - Used to truncate(remove) the decimal values
// console.log(Math.trunc(3.1456))

//^ Math.random() - Used to generate random values between 0 and 1
// console.log(Math.random())
// console.log(Math.floor(Math.random() * 1000));

//! Create a 4 digit random otp

//! Date
//? Used to access system date and time

let date=new Date()
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getTime())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getMilliseconds())

