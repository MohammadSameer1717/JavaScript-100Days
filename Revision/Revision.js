// // Using Async/Await (Cleaner Syntax)
//  async function getPost() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
// getPost();

// console.log(a);
// var a= 10;
//  console.log(a);
 
// console.log(" Revision.js is running!");

// function a() {
//     var a = 10;
//     console.log(a);
// }
// a();

// function b () {
//     let b = 20;
//     console.log(b);
// }
// b();
// function b () {
//     const b = 30;
//     console.log(b);
// }
// b();

// // callback Hell
// const cart = ["peter", "saddi", "samarth", "salman"];
// api.createOrder(cart, function () {
//     api.proceedToPayment(function () {
//         api.showOrderSummary(
//             function () {
//                 api.updateWallet()
//             }
//         )
//     })
// });

// const cart1 = ["peter", "saddi", "samarth", "salman"];
// api.createOrder(cart, function () {
//     api.proceedToPayment(function () {
//     });
// });

// // Real Example caused that callback Hell 
// fs.readFile("file", function(err, data1) {
//     if(err) throw err;
//     fs.readFile("file2.txt", function(err, data2) {
//         if(err) throw err;
//         fs.readFile("file", function(err, data3) {
//             if (err) throw err;
//             console.log(data1, data2, data3);
//         })
//     })
// })

// // Promises passing a function 
// const cart1 = ["shoes", "pant", "kurte"];
// createOrder(cart, function (orderId) {
//     proceedTopayment(orderId);
// });
// // To ataching a function this one is best
// const Promises = createOrder(cart);
// Promises.then(function (orderId) {
//     proceedTopayment(orderId)
// });

// // // 2nd
// const GITHUB_API = "https://github.com/";
// const user = fetch(GITHUB_API);
// console.log(user);

//  const cart = ["shoes", "pant", "kurte"];
// createOrder(cart, function (orderId) {
//     proceedTopayment(orderId, function (paymentInfo) {
//         showOrderSummary(paymentInfo, function () {
//             updateWalletBalance();
//         });
//     });
// });
 
// createOrder(cart)
// .then(function (orderId) {
//  return proceedTopayment(orderId);
// })
// .then(function (paymentInfo) {
//  return proceedTopayment(paymentInfo);
// })
// .then(function (paymentInfo) {
//  return proceedTopayment(paymentInfo);
// });

// // // ***///
// createOrder(cart)
// .then((orderId) => proceedTopayment(orderId))
// .then((paymentInfo) => showOrderSummary(paymentInfo))
// .then((paymentInfo) => updateWalletBalance(paymentInfo));

// fetchData()
//   .then(result => console.log("Success:", result))
//   .catch(error => console.log("Error:", error))
//   .finally(() => console.log("Done"));

// // Order
// createOrder(cart)
// .then(function (orderId) {
//  return proceedTopayment(orderId);
// })
// .then(function (paymentInfo) {
//  return proceedTopayment(paymentInfo);
// })
// .then(function (paymentInfo) {
//  return proceedTopayment(paymentInfo);
// });

// createOrder(cart)
// .then((orderId) => proceedTopayment(orderId))
// .then((paymentInfo) => showOrderSummary(paymentInfo))
// .then((paymentInfo) => updateWalletBalance(paymentInfo));

// // Costom promises
// const myPromise = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve("Resolved!");
//   } else {
//     reject("Error occurred");
//   }
// });

// myPromise
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

// // create apromise, chaning and Error Handling
// const cart = ["shoes", "pant", "kurta", "shirt"];
// const promise = createOrder(cart);  //OrderId
// console.log(promise);

//  promise.then(function(orderId) {
//     console.log(orderId);
    
//     // proceedToPayment(orderId);
// })

// // Producer: A function that returns a Promise
// function fetchData(success) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) {
//         resolve("Data fetched successfully!");
//       } else {
//         reject(new Error("Failed to fetch data."));
//       }
//     }, 2000);
//   });
// }

// // Consumer: Using .then() and .catch()
// fetchData(true)   // try false also!
//   .then(result => {
//     console.log("Result:", result);
//   })
//   .catch(error => {
//     console.error("Error:", error.message);
//   });


// // create apromise, chaning and Error Handling
// //  Consumer Code
// const cart = ["shoes", "pant", "kurta", "shirt"];

// createOrder(cart) // returns a Promise
//   .then(function (orderId) {
//     console.log("Order ID:", orderId);
//     return orderId;
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     console.log("#", paymentInfo);
//   })
//   .catch(function (err) {
//     console.log("Error:", err.message);
//   });

//   // production function 
//   function createOrder(cart) {
//   return new Promise(function (resolve, reject) {
//     // Validate the cart
//     if (!validateCart(cart)) {
//       const err = new Error("Cart is not valid");
//       reject(err);
//       return;
//     }

//     // Simulate order creation
//     const orderId = "12313241";

//     setTimeout(function () {
//       resolve(orderId);
//     }, 3000); 
//   });
// }

// // Revision this.keyword
// function test() {
//  console.log(this);
// }
// test();
// test(21);

// Q: 2 how does this work inside an object method?
// const person = {
//     name: "peter",
//     greet () {
//         console.log("Hello, " + this.name);
//     },
// };
// person.greet ();

// Q:3 what happens if you assign a method to another method
//  const person1 = {
//   name:"peterking",
//   greet() {
//     console.log("Hello," + this.person1);
//    },
// };

// person1.greet();

// const obj1 = {
//     name:"peter",
// }
// const obj2 = {
//     name:"peter",
// }
// console.log( obj1 == obj2);

// // ES 5 Method
//  function person(name) {
//     this.name = name;
//     this.sayname = function () {
//         setTimeout(function () {
//             console.log(this.name);
            
//         }, 2000);
//     };
//  };
//  new person("peter").sayname();
// output = undefined


// //  Fix in ES5 (using self = this or bind()):

// function person(name) {
//     var self = this;
//     this.name = name;
//     this.sayname = function () {
//         setTimeout (function () {
//             console.log(self.name);
//         }, 2000);
//     };
// };
// new person("peter").sayname();
// // output = peter

// // ES 6 Example
// function person(name) {
//     this.name = name;
//     this.sayname = function () {
//         setTimeout (() => {
//             console.log(this.name);
            
//         },2000);
//     };
// };
// new person("peter").sayname();


// // closure Interview Practice Quetion 

// function outer (){
//     let count = 0;
//     return function inner() {
//         count++;
//         console.log(count);
//     };
// };
// const counter = outer();
// counter();
// counter();


// Can you explain closure with a real-world example?
function createCounter(){
    let count = 0;
    return {
        increment: function() { count++; return count;},
        decrement: function() { count--; return count;}
    };
}
const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());


// What will the following print and why?

function outer() {
  let arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function() {
      console.log(i);
    });
  }
  return arr;
}
const result = outer();
result[0](); 
result[1](); 
result[2](); 

// Example 2: Closure with Parameters
function multiplier(x) {
  return function(y) {
    return x * y; 
  };
}

const double = multiplier(2);
console.log(double(5));  //10

const triple = multiplier(3);
console.log(triple(5)); 


// Example 3: Private Data using Closures
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: function(amount) {
      balance += amount;
      console.log(`Deposited: ${amount}, Balance: ${balance}`);
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrew: ${amount}, Balance: ${balance}`);
      } else {
        console.log("Insufficient balance!");
      }
    }
  };
}

const account = createBankAccount(100);
account.deposit(50); 
account.withdraw(70);  


// Reverse String 
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(reverseString("JavaScript")); // tpircSavaJ

const obj = {
  name: "Sameer",
  arrow: () => console.log(this.name)
};
obj.arrow(); // undefined (takes global `this`)
