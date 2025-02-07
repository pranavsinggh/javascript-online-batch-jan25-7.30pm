//! Destructuring
//? It allows us to extract the data from an object or an array, and store it in a variable
//? It reduces the code

//^ Array destructuring
//? We can any varible name.

// let arr = [
//   "Spiderman",
//   "Captain America",
//   "Ironman",
//   ["THOR", "LOKI", ["HELA", "SURTUR"]],
//   "Hulk",
// ];

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// let d = arr[3];
// let e = arr[4];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// let [, b, , d, e] = arr;
// // console.log(a);
// console.log(b);
// // console.log(c);
// console.log(d);
// console.log(e);

// let [a, , , [p, q, r]] = arr;
// console.log(p);
// console.log(q);
// console.log(r);

// let [, , , [, , [, x]]] = arr;
// console.log(x)

//^ Object destructuring
//? For the varible, we need to pass same key name (case-sensitive)

// let obj = {
//   name: "Peter parker",
//   age: 21,
//   isSuperhero: true,
//   address: {
//     area: "Queens",
//     city: {
//       cityName: "New York",
//       zipcode: 7008,
//     },
//     country: "USA",
//   },
// };

// let {
//   name,
//   isSuperhero,
//   age,
//   address: {
//     area,
//     country,
//     city: { cityName, zipcode },
//     city,
//   },
//   address,
// } = obj;
// console.log(name);
// console.log(isSuperhero);
// console.log(age);
// console.log(address);
// console.log(area);
// console.log(country);
// console.log(city);
// console.log(cityName);
// console.log(zipcode);

let student = {
  id: 121,
  skills: {
    allSkills: {
      one: [
        {
          majorSkills: [
            {
              proficient: "Javascript",
            },
            {
              moderate: "JAVA",
            },
          ],
        },
      ],
      two: [
        {
          minorSkills: [
            {
              manageable: "SQL",
            },
          ],
        },
      ],
    },
  },
};
