// //  if Condition
//  let age = 25;
//  if (age >= 20) {
//  console.log("you can vote");
//  }
 
// // Example: 2 if-else
//   age = 15;
// if (age >= 20) {
//   console.log("you can be Vote now");
// } else {
//   console.log("you cannot be Vote now ");
// };

// // Example: 3 if-else if-else
//   let marks = 77;
// if (marks >= 90) {
//   console.log("Grade A");
// }  else if (marks >= 75) {
//   console.log("grade B");
// } else if (marks >= 50) {
//   console.log("Grade C");
  
// } else {
//   console.log("fail");
  
// };

// // Example 4: Nested if
// let age = 25;
// let hasID = true;

// if (age >= 18) {
//   if (hasID) {
//     console.log("You can enter the club");
//   } else {
//     console.log("ID required");
//   }
// } else {
//   console.log("You are underage");
// }

// // Example: 5 Switch case
// let color = "green";

// switch (color) {
//   case "red":
//     console.log("Stop");
//     break;
//   case "yellow":
//     console.log("Wait");
//     break;
//   case "green":
//     console.log("Go");
//     break;
//   default:
//     console.log("Invalid color");
// }

// // Exercise 1: Fibonacci Series (0 1 1 2 3 5 …)

// let n = 10; 
// let a = 0, b = 1;

// console.log("Fibonacci Series:");
// for (let i = 1; i <= n; i++) {
//   console.log(a);
//   let next = a + b;
//   a = b;
//   b = next;
// }

// // Exercise 2: Factorial (n!)
// let num = 5;
// let fact = 1;

// for (let i = 1; i <= num; i++) {
//   fact *= i;
// }
// console.log("Factorial of", num, "=", fact); 

// // Exercise 3: Prime Numbers up to n
// let n = 20;

// console.log("Prime numbers up to", n, ":");

// for (let i = 2; i <= n; i++) {
//   let isPrime = true;
  
//   for (let j = 2; j <= Math.sqrt(i); j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
  
//   if (isPrime) {
//     console.log(i);
//   }
// }

// // All Qeustion in Closure like Data hiding, Private Variable and function foctories
// function counter () {
// let count = 0;
// return function () {
//   count++;
//   return count;
// };
// }
// const C = counter();
// console.log(C());
// console.log(C());
// console.log(C());

// // 2nd Example Private Variable

// function bankAccount(initialBalance) {
//   let balance = initialBalance; // private variable

//   return {
//     deposit: function (amount) {
//       balance += amount;
//       return balance;
//     },
//     withdraw: function (amount) {
//       if (amount <= balance) {
//         balance -= amount;
//       } else {
//         console.log("Insufficient funds!");
//       }
//       return balance;
//     },
//     getBalance: function () {
//       return balance;
//     }
//   };
// }

// const myAccount = bankAccount(1000);
// console.log(myAccount.deposit(500));  // 1500
// console.log(myAccount.withdraw(200)); // 1300
// console.log(myAccount.getBalance());  // 1300
// //Hinglish: Balance ko direct change nahi kar sakte, 
// // sirf deposit/withdraw methods ke through hi. Yeh private variable hai.

// // 3rd Function Factory (Multiplier Example)
// function multiplier(factor) {
//   return function (number) {
//     return number * factor;
//   };
// }

// const double = multiplier(2);
// const triple = multiplier(3);

// console.log(double(5)); // 10
// console.log(triple(5)); // 15
// // Hinglish: Ek hi factory se double, 
// // triple jaisi customized functions ban gaye.

// // 4rd “Remax Variation” (Event Listener Closure)
// function attachEvent() {
//   let count = 0;
//   document.getElementById("btn").addEventListener("click", function () {
//     count++;
//     console.log("Button clicked:", count, "times");
//   });
// }
// attachEvent();
// // Button click karne par closure count ko yaad rakhta hai har click ke liye.


// All Question are Callback Function like this one Basic Callback
// function greet(name, Callback) {
// console.log("Hello" + name);
// Callback();
// }
// function sayBye () {
//   console.log("GoodBye!");
// }
// greet("Sameer", sayBye);

// // Synchronous Callback (Array Methods)
// let numbers = [1, 2, 3, 4];
// numbers.forEach(num => {
//   console.log("Number:", num);
// });

// // Asynchronous Callback (setTimeout)
// console.log("Start");

// setTimeout(() => {
//   console.log("This runs after 2 seconds");
// }, 2000);

// console.log("End");

// // Callback Hell (Nested API simulation)
// function getUser(callback) {
//   setTimeout(() => {
//     console.log("User fetched");
//     callback();
//   }, 1000);
// }

// function getPosts(callback) {
//   setTimeout(() => {
//     console.log("Posts fetched");
//     callback();
//   }, 1000);
// }

// function getComments() {
//   setTimeout(() => {
//     console.log("Comments fetched");
//   }, 1000);
// }
// // Nested callbacks → Callback Hell
// getUser(() => {
//   getPosts(() => {
//     getComments();
//   });
// });


// // Error Handling in Callbacks
// function fetchData(callback) {
//   let error = true;

//   if (error) {
//     callback(" Something went wrong", null);
//   } else {
//     callback(null, { id: 1, name: "Sameer" });
//   }
// }

// fetchData((err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Data:", data);
//   }
// });


// // Basic Promise (Resolve / Reject)
// let promise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Task completed!");
//   } else {
//     reject("Task failed!");
//   }
// });

// promise
//   .then(result => console.log(result))   // success case
//   .catch(error => console.log(error))    // failure case
//   .finally(() => console.log("Done!"));


// //   Simulating API Call with setTimeout
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let data = { id: 101, name: "Sameer" };
//       resolve(data);
//     }, 2000);
//   });
// }

// fetchData()
//   .then(res => console.log("Data received:", res))
//   .catch(err => console.log("Error:", err));

// //   Promise Chain (Avoid callback hell)
// new Promise(resolve => resolve(5))
//   .then(num => {
//     console.log(num); // 5
//     return num * 2;
//   })
//   .then(num => {
//     console.log(num); // 10
//     return num * 3;
//   })
//   .then(num => {
//     console.log(num); // 30
//   });


// // Promise.all()
// let p1 = Promise.resolve("First done");
// let p2 = new Promise(res => setTimeout(() => res("Second done"), 1000));
// let p3 = Promise.resolve("Third done");

// Promise.all([p1, p2, p3])
//   .then(results => console.log("All results:", results))
//   .catch(err => console.log("Error in one:", err));

// // Promise.race
// let fast = new Promise(res => setTimeout(() => res("Fast"), 500));
// let Slow = new Promise(res => setTimeout(() => res("Slow"), 2000));  

// promise.race([fast, Slow]).then(result => console.log(result));

// // Promise.allSettled()
// let p1 = Promise.resolve("Success");
// let p2 = Promise.reject("Failure");

// Promise.allSettled([p1, p2]).then(results => console.log(results));
// // Output
// [
//   { status: "fulfilled", value: "Success" },
//   { status: "rejected", reason: "Failure" }
// ]

// // Promise.any()
// let p1 = Promise.reject("Fail 1");
// let p2 = new Promise(res => setTimeout(() => res("Success!"), 1000));
// let p3 = Promise.reject("Fail 2");

// Promise.any([p1, p2, p3])
//   .then(result => console.log(result)) // "Success!"
//   .catch(err => console.log("All failed:", err));


// All Question / Answer in Async/Await Example
// Basic Async Function
async function greet() {
  return "Hello Sameer!";
}
greet().then(msg => console.log(msg)); 
// Output: Hello Sameer!

// Await Example
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("📦 Data received"), 2000);
  });
}

async function getData() {
  console.log("Fetching...");
  let result = await fetchData(); // waits until resolved
  console.log(result);
  console.log("Done");
}
getData();

// Error Handling with Try-Catch
function fetchData() {
    return new Promise((resolve, reject) => {
        let success = false;
        setTimeout(() => {
            if (success) resolve("Error fetching data");
        }, 3000);
    });
}
async function getData() {
    try {
        let result = await fetchData();
        console.log(result);
        
    } catch (err) {
        console.log("Caught:", err);
    }
}
getData();


// Parallel Execution with Promise.all
async function runParallel() {
  let results = await Promise.all([
    task("Task A", 1000),
    task("Task B", 1500),
    task("Task C", 500)
  ]);
  console.log("All Done:", results);
}
runParallel();

// How to fetch API calls Effectively.All Q/A Only basic on Fetch API
// Basic GET Request
async function getUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    if (!response.ok) throw new Error("❌ Failed to fetch");

    let data = await response.json();
    console.log("✅ Users:", data);
  } catch (err) {
    console.error("Error:", err.message);
  }
}
getUsers();


// POST Request (Send Data)
async function createUser() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Sameer", email: "sameer@test.com" })
    });

    let data = await response.json();
    console.log(" User Created:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}
createUser();

// Parallel API Calls with Promise.all
async function fetchParallel() {
  try {
    let [users, posts] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()),
      fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
    ]);

    console.log("✅ Users:", users.length, "✅ Posts:", posts.length);
  } catch (err) {
    console.error("Error:", err);
  }
}
fetchParallel();

// Retry Logic (Simple Example)
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      let res = await fetch(url);
      if (res.ok) return await res.json();
      throw new Error("❌ API failed");
    } catch (err) {
      console.log(`Retry ${i + 1} failed...`);
      if (i === retries - 1) throw err;
    }
  }
}

fetchWithRetry("https://jsonplaceholder.typicode.com/users")
  .then(data => console.log("✅ Data:", data))
  .catch(err => console.error("Final Error:", err));

//   Cancel API Request (AbortController)
const controller = new AbortController();

async function fetchData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      signal: controller.signal
    });
    let data = await res.json();
    console.log("Data:", data);
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Request Cancelled");
    } else {
      console.error("Error:", err);
    }
  }
}

// Cancel the request after 1s
setTimeout(() => controller.abort(), 1000);

fetchData();
