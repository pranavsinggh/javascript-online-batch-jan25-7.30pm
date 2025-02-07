//^ Default export
// let obj1 = {
//   name: "Peter parker",
//   age: 21,
//   isSuperhero: true,
// };

// export default obj1;

//^ Named export
// export let obj2 = {
//   name: "Steve rogers",
//   age: 120,
// };
// export let obj3 = {
//   name: "Tony stark",
//   age: 60,
// };

let obj2 = {
  name: "Steve rogers",
  age: 120,
};
let obj3 = {
  name: "Tony stark",
  age: 60,
};

// export { obj2, obj3};

export { obj2 as x, obj3 as y};
