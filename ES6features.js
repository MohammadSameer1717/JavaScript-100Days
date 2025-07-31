// var a = 14;
// a = 16;

// if (true) {
//     var xyz = "test";
// }
// console.log(xyz);

// // can be reassigned
// // can be redeclared
// // function scope

// let b = 16;
// b = 32;

// // if (true) {
// //     var xyz = "test";
// // }
// // console.log(xyz);

// // can be reassigned
// // cannot be redeclared
// // block scopee

// const c = 14;
// c = 12;
// // cannot be reassigned
// // cannot be redeclared
// // block scope


// function test() {
//   if(true) {
//     var t1 = "test1";
//     let t2 = "test2";
//     const t3 = "test3";
//   }

//   console.log(t1);
//   console.log(t2);
//   console.log(t3);

// }

// console.log(t1);   //cat't be work t1 is a function scope variable

// test();


// //  day2 Arrow function

// const test = (param1, param2) => {
//   return param1 + param2;
// }
// const printTest = test("xyz", "abc");
// console.log(printTest);


// const test = (param1, param2) => param1 + param2;
// console.log(test("Hello", "HOw are you"));



// const test = param => {
//   return param;
// }
// console.log(test("hello"));


// Destructuring

// const member = {
//   id: 133,
//   email: "test@abcgmail.com",
//   membership: "premium",
//   cost : 15000
// };
// const {id: newId, email} = member;

// console.log(newId);
// console.log(email);

// const member = [
//   {
//   id: 133,
//   email: "test@abcgmail.com",
//   membership: "premium",
//   cost : 15000,
// },
//  {
//   id: 233,
//   email: "pqr@abcgmail.com",
//   membership: "premium",
//   cost : 25000,
// },
//  {
//   id: 639,
//   email: "shift@abcgmail.com",
//   membership: "premium",
//   cost : 12000,
// },
//  {
//   id: 283,
//   email: "pop@abcgmail.com",
//   membership: "premium",
//   cost : 1000,
// },
// ];

// const [user1, user2, user3] = member;
// console.log(user1);
// console.log(user2);
// console.log(user3);


// spread operator

// const array1 = [23, 45, 56];
// const array2 = [...array1];
// console.log(array2);


// const array1 = [23, 45, 56];
// const array2 =["pqr", "abc", "xyz"];

// const Array3 = [...array1, ...array2];

// // console.log(array3);

// const array4 = [...array2, true, new Date(), "Hello, how are you!"];
// console.log(array4);

// const obj1 = {
//   test: "djadwd",
//   test2: true,
// };
// // const obj2 = {...obj1}
// // console.log(obj2);

// const obj2 = {
//   test3: new Date(),
// };

// // const obj3 = {...obj1, ...obj2};
// // console.log(obj3);

// const obj4 = {...obj1, name: "abc", email: "abc@gmail.com"};
// console.log(obj4);

// // REST Operator

// const user = {
//   id: 1,
//   name: "abc",
//   isActive: true,
//   email: "abc@gmail.com",
//   createdAt: new Date()
// };

// const { id, name, ...remain } = user;

// console.log(id);
// console.log(name);
// console.log(remain);


// Destructuring with Rest operator

// const User = [
//   {
//   id: 1,
//   name: "abc",
//   isActive: true,
//   email: "abc@gmail.com",
//   createdAt: new Date()
// },
//  {
//   id: 12,
//   name: "pqr",
//   isActive: true,
//   email: "pqr@gmail.com",
//   createdAt: new Date()
// },
//  {
//   id: 3,
//   name: "xyz",
//   isActive: true,
//   email: "xyz@gmail.com",
//   createdAt: new Date()
// },
//  {
//   id: 4,
//   name: "pop",
//   isActive: true,
//   email: "pop@gmail.com",
//   createdAt: new Date()
// },
// ];

// const [user1, user2, ...remainingUsers] = user;

// console.log(user1);
// console.log(remainingUsers);

// use spread and Rest operator to seperate users array and useritems array.

// const Users = [
//   {
//     name: "Peter",
//     items: ["Laptop", "Phone"],
//     email: "peter@gmail.com",
//   },
//   {
//     name: "John",
//     items: ["Tablet", "Headphones"],
//     email: "john@gmail.com",
//   },
//   {
//     name: "Sara",
//     items: ["Camera"],
//     email: "sara@gmail.com",
//   }
// ];

// // Separate users (without items) and userItems (all items combined)

// // // Spread operator for users and rest inside map for items
// // const users = allUsers.map(({ items, ...rest }) => rest);
// // const userItems = allUsers.flatMap(({ items }) => items);

// // console.log("Users:", users);
// // console.log("User Items:", userItems);

// let usersArray = [];
// let userItems = [];

// users.forEach((element) => {
//   const { items, ...restUserData } = element;

//   items.forEach((items) => {
//     item.user = restUserData.id;
//   });

//   usersArray = [...usersArray, restUserData];
//   usersArray = [...userItems, ...items];
// });
// console.log(usersArray);

// console.log(userItems);


// const Users = [
//   {
//     name: "Peter",
//     items: ["Laptop", "Phone"],
//     email: "peter@gmail.com",
//   },
//   {
//     name: "John",
//     items: ["Tablet", "Headphones"],
//     email: "john@gmail.com",
//   },
//   {
//     name: "Sara",
//     items: ["Camera"],
//     email: "sara@gmail.com",
//   }
// ];

// let usersArray = [];
// let userItems = [];

// Users.forEach((element, index) => {
//   const userId = index + 1;
//   const { items, ...restUserData } = element;

//   // Add user ID to user object
//   const user = { id: userId, ...restUserData };
//   usersArray = [...usersArray, user];

//   // Add user ID to each item and push to userItems
//   const updatedItems = items.map((item) => ({
//     name: item,
//     userId: userId
//   }));

//   userItems = [...userItems, ...updatedItems];
// });

// console.log("Users Array:", usersArray);
// console.log("User Items:", userItems);


function test(param1 = 12, param2 = 13) {
  console.log(param1 + param2);
}
test();
test(50);
test(undefined,50);
test(50,50);