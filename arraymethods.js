
// var arr1 = [23, 34, 45, 56,67 , 78];
// console.log(arr1.length);


// var newLenght = arr1.push(11);

// // console.log(arr1);

// console.log(newLenght);
// console.log(arr1);

// // remove the last element in arr1
// var element = arr1.pop();

// console.log(arr1);

// console.log(element);


// var arr1 = [23, 34, 45, 56,67 , 78];
// // remove start element in this arr1
// arr1.shift();
// arr1.unshift(12);
// console.log(arr1);

// var arr1 = [23, 34, 45, 56, 67, 88, 99, 78];
// // arr1.splice(4, 0 , 17,and on so  );
// arr1.splice(4, 2 , 1, 17);
// console.log(arr1);


// var arr1 = [23, 34, 45, 56, 67, 88, 99, 78];

// var newArr = arr1.slice(3);
// console.log(newArr);
// console.log(arr1);


// // REST OPERATOR and 

// let user = {
//   id: 191,
//   name: "salman",
//   address: "nwknjskmlcsc",
//   password: "12432422",
//   email: "peter@gmail.com",
//   isActive: true,
//   products: ["products1", "products2", "products3"],
// };

// let { id, name, email, isActive } = user;
// id: 55;
// console.log(id);
// console.log(user);


// let user = {
//   id: 191,
//   name: "salman",
//   address: "nwknjskmlcsc",
//   password: "12432422",
//   email: "peter@gmail.com",
//   isActive: true,
//   products: ["products1", "products2", "products3"],
//   class: {
//     id: 17,
//     className: "B.tech",
//     year: 2024,
//   },
// };

//  let { products, email, ...userObj } = user;
//  console.log(products);
//  console.log(email)
//  console.log(userObj);


//  const { className, year } = user.class;
//  console.log(className);

//  const { class: { className, year} } = user;
//  console.log(className);


// const { class: classObj, ... userObj} = user;
// console.log(classObj);
// console.log(userObj);


// var arr1 = ["abc", "pqr"];
// var arr2 = [23,45];
// var arr3 = [true, false];

// var combinedArray = arr2.concat(arr1, arr3);
// var test = combinedArray.toString();
// var test2 = combinedArray.join(" * ");

// var check = combinedArray.includes("xyz");

// console.log(combinedArray);
// console.log(test);
// console.log(test2);
// console.log(check); 



 var users = [
    {
    name: "peter",
    email: "peter@gmail.com",
    email2: "sam@gmail.com",
    isActive: true,
    createdAt: new Date(),
    products:["iphone", "airpods", "macbook"],  
    age: 56
    },

    {
    name: "salman",
    email: "salman@gmail.com",
    isActive: false,
    createdAt: new Date(), 
    products:["tresemme", "beardo gel", "phillips led"], 
    age: 70  
    },

   {
    name: "samarth",
    email: "samarth@gmail.com",
    isActive: false,
    createdAt: new Date(), 
    products:["washing machin", "vivo", "job"],  
    age: 30
    },
      {
    name: "terenaam",
    email: "terenaam@gmail.com",
    isActive: true,
    createdAt: new Date(), 
    products:["washing machin", "vivo", "job"],  
    age: 40
    },
      {
    name: "goti",
    email: "goti@gmail.com",
    isActive: false,
    createdAt: new Date(), 
    products:["washing machin", "vivo", "job"],  
    age: 60
    },
 ];

 var newUsers = [];
 users.forEach(function(item, Index) {
    if (item.age > 45) {
        newUsers.push(item);
    } else {
        newUsers.unshift(item);
    }
 });
 console.log(newUsers);


// new user formate array 

var users = [
  {
    name: "peter",
    email: "peter@gmail.com",
    isActive: true,
    createdAt: new Date(),
    products: [
      { name: "iphone", cost: 80000 },
      { name: "airpods", cost: 20000 },
      { name: "macbook", cost: 150000 }
    ],
    age: 56
  },
  {
    name: "salman",
    email: "salman@gmail.com",
    isActive: false,
    createdAt: new Date(),
    products: [
      { name: "tresemme", cost: 300 },
      { name: "beardo gel", cost: 250 },
      { name: "phillips led", cost: 3000 }
    ],
    age: 70
  }
  // Add more users as needed...
];


users.forEach(function (user) {
  var expensiveItemCost = 0;

  user.products.forEach(function (item) {
    if (item.cost > expensiveItemCost) {
      expensiveItemCost = item.cost;
      user.mostExpensiveItem = item.name;
    }
  });
});

console.log(users);

var usersOnly = users.map(function (user, Index) {
  delete user.items;
  return user;
});
console.log(usersOnly);


// uses.map******
var userName = users.map(function(user, Index) {
  return user.name;
});
console.log(userName);


// filter methods not work please check this 

var activeUsers = users.filter(function (user, index) {
 return user.isActive;
});
console.log(activeUsers);

// uses find
var singleUser = users.find(function (user, index) {
  if (user.isActive) {
    if (counter > 0) return true;
  } else counter++;
});
console.log(singleUser);


// index Value findIndex 
var userIndexValue = users.findIndex(function(user, index) {
  return user.id === 4;
});
console.log(singleUser);
console.log(userIndexValue);

// find users. every
var check = users.every(function(user) {
  return user.isActive;
});

var check1 = users.every(function(user) {
  return user.isActive;
});

console.log(check);
console.log(check1);
