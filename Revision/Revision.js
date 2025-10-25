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


// // All Question / Answer in Async/Await Example
// // Basic Async Function
// async function greet() {
//   return "Hello Sameer!";
// }
// greet().then(msg => console.log(msg)); 
// // Output: Hello Sameer!

// // Await Example
// function fetchData() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("Data received"), 2000);
//   });
// }

// async function getData() {
//   console.log("Fetching...");
//   let result = await fetchData(); // waits until resolved
//   console.log(result);
//   console.log("Done");
// }
// getData();

// // Error Handling with Try-Catch
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         let success = false;
//         setTimeout(() => {
//             if (success) resolve("Error fetching data");
//         }, 3000);
//     });
// }
// async function getData() {
//     try {
//         let result = await fetchData();
//         console.log(result);
        
//     } catch (err) {
//         console.log("Caught:", err);
//     }
// }
// getData();


// // Parallel Execution with Promise.all
// async function runParallel() {
//   let results = await Promise.all([
//     task("Task A", 1000),
//     task("Task B", 1500),
//     task("Task C", 500)
//   ]);
//   console.log("All Done:", results);
// }
// runParallel();


// // How to fetch API calls Effectively.All Q/A Only basic on Fetch API
// // Basic GET Request
// async function getUsers() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
    
//     if (!response.ok) throw new Error("Failed to fetch");

//     let data = await response.json();
//     console.log("Users:", data);
//   } catch (err) {
//     console.error("Error:", err.message);
//   }
// }
// getUsers();


// // POST Request (Send Data)
// async function createUser() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name: "Sameer", email: "sameer@test.com" })
//     });

//     let data = await response.json();
//     console.log(" User Created:", data);
//   } catch (err) {
//     console.error("Error:", err);
//   }
// }
// createUser();

// // Parallel API Calls with Promise.all
// async function fetchParallel() {
//   try {
//     let [users, posts] = await Promise.all([
//       fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()),
//       fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
//     ]);

//     console.log("Users:", users.length, "Posts:", posts.length);
//   } catch (err) {
//     console.error("Error:", err);
//   }
// }
// fetchParallel();

// // Retry Logic (Simple Example)
// async function fetchWithRetry(url, retries = 3) {
//   for (let i = 0; i < retries; i++) {
//     try {
//       let res = await fetch(url);
//       if (res.ok) return await res.json();
//       throw new Error("API failed");
//     } catch (err) {
//       console.log(`Retry ${i + 1} failed...`);
//       if (i === retries - 1) throw err;
//     }
//   }
// }

// fetchWithRetry("https://jsonplaceholder.typicode.com/users")
//   .then(data => console.log("Data:", data))
//   .catch(err => console.error("Final Error:", err));

// //   Cancel API Request (AbortController)
// const controller = new AbortController();

// async function fetchData() {
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       signal: controller.signal
//     });
//     let data = await res.json();
//     console.log("Data:", data);
//   } catch (err) {
//     if (err.name === "AbortError") {
//       console.log("Request Cancelled");
//     } else {
//       console.error("Error:", err);
//     }
//   }
// }

// // Cancel the request after 1s
// setTimeout(() => controller.abort(), 1000);
// fetchData();

// // This.KeyWord All Ques / Ans 
// // Global Scope
// console.log(this); 
// // Browser → window
// // Node.js → {}


// // Inside Object Method
// const user = {
//   name: "Sameer",
//   greet: function() {
//     console.log("Hello, " + this.name);
//   }
// };
// user.greet(); // Hello, Sameer


// // Arrow Function (Lexical this)
// const obj = {
//   name: "Remax",
//   greet: () => {
//     console.log("Hi " + this.name);
//   }
// };
// obj.greet(); // Hi undefined (because arrow doesn’t have its own `this`)


// // Class Example
// class Car {
//   constructor(brand) {
//     this.brand = brand;
//   }
//   show() {
//     console.log("Car: " + this.brand);
//   }
// }
// const c1 = new Car("BMW");
// c1.show(); // Car: BMW


// // Call, Apply, Bind
// function greet(city) {
//   console.log(`Hi ${this.name} from ${city}`);
// }
// const person = { name: "Sameer" };

// greet.call(person, "Delhi");  // Hi Sameer from Delhi
// greet.apply(person, ["Mumbai"]); // Hi Sameer from Mumbai
// const newFn = greet.bind(person, "Lucknow");
// newFn(); // Hi Sameer from Lucknow


// // Event Listener
// document.querySelector("button").addEventListener("click", function() {
//   console.log(this); // Button element
// });


// // 1: Simple Debounce Function
// function debounce(func, delay) {
//   let timer;
//   return function(...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// }


// // 2: Search Input (Like Remax Example)
// // Function to call API
// function fetchResults(query) {
//   console.log("Fetching API for:", query);
// }

// const debouncedSearch = debounce(fetchResults, 500);

// document.getElementById("search").addEventListener("input", (e) => {
//   debouncedSearch(e.target.value);
// });
// // Agar user fast typing kare: R → Re → Rem → Rema → Remax
// // ⚡ Without debouncing → API call 5 times
// // ⚡ With debouncing → API call only once for "Remax" after 500ms


// // 3: React Debouncing (Search Box)
// import React, { useState } from "react";

// function debounce(func, delay) {
//   let timer;
//   return (...args) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => func(...args), delay);
//   };
// }

// export default function SearchBox() {
//   const [text, setText] = useState("");

//   const handleSearch = debounce((value) => {
//     console.log("API call for:", value);
//   }, 600);

//   return (
//     <input
//       type="text"
//       placeholder="Search..."
//       value={text}
//       onChange={(e) => {
//         setText(e.target.value);
//         handleSearch(e.target.value);
//       }}
//     />
//   );
// }


// // Debounce Example – Search Box
// function debounce(func, delay) {
//   let timer;
//   return function(...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => func.apply(this, args), delay);
//   };
// }

// const fetchSearch = debounce((query) => {
//   console.log("API call for:", query);
// }, 500);

// document.getElementById("search").addEventListener("input", (e) => {
//   fetchSearch(e.target.value);
// });   //User stops typing → API called once


// // Throttle Example – Scroll Event
// function throttle(func, limit) {
//   let lastCall = 0;
//   return function(...args) {
//     const now = Date.now();
//     if (now - lastCall >= limit) {
//       lastCall = now;
//       func.apply(this, args);
//     }
//   };
// }

// const handleScroll = throttle(() => {
//   console.log("Scroll event at:", window.scrollY);
// }, 1000);

// window.addEventListener("scroll", handleScroll);
// // Even if scroll triggers 100 times per second → Runs once every 1 sec


// Example 1: Basic Closure
function outer() {
  let count = 0; // variable inside outer function
  function inner() {
    count++;
    console.log("Count:", count);
  }
  return inner;
}

const counter = outer(); // returns inner function

counter(); // Count: 1
counter(); // Count: 2
counter(); // Count: 3


// Example 2: Private Variables
function createBankAccount(initialBalance) {
  let balance = initialBalance; 

  return {
    deposit: function (amount) {
      balance += amount;
      console.log("Deposited:", amount, "New Balance:", balance);
    },
    withdraw: function (amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log("Withdrawn:", amount, "Remaining Balance:", balance);
      } else {
        console.log("Insufficient balance");
      }
    }
  };
}

const account = createBankAccount(1000);
account.deposit(500);  // Deposited: 500 New Balance: 1500
account.withdraw(200); // Withdrawn: 200 Remaining Balance: 1300

// can you explain closure with a react word examp
 function createCounter() {
  let count = 0; // private variable (not accessible outside)
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter1 = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1


// Promise with setTimeout (Async Example)
function fetchData() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data...");
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

  //  Inside an Arrow Function
  const user = {
  name: "Sameer",
  greet: () => {
    console.log("Hi " + this.name);
  },
};
user.greet();


// code Variation: Reverse string loop
function reverseString(str) {
  let result = "";
  for (i = str.lenght - 1; i <= 0; i--) {
    result += str [i]
  }
  return result;
}
console.log(reverseString("sameer"));

// Reverse String but Only Vowels (Keep Others Same)
function reverseVowels(str) {
  const vowels = "aeiouAEIOU";
  const chars = str.split("");
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    if (!vowels.includes(chars[left])) {
      left++;
      continue;
    }
    if (!vowels.includes(chars[right])) {
      right--;
      continue;
    }

    // swap vowels
    [chars[left], chars[right]] = [chars[right], chars[left]];
    left++;
    right--;
  }
  return chars.join("");
}
console.log(reverseVowels("sameer"));      // semaer
console.log(reverseVowels("javascript"));  // jivascrept
console.log(reverseVowels("hello world")); // holle werld

// Reverse Only Vowels (Advanced & Clean Version)
function reverseOnlyVowels(str) {
  const vowels = str.match(/[aeiou]/gi); // extract vowels
  if (!vowels) return str; // if no vowels, return same string

  return str.replace(/[aeiou]/gi, () => vowels.pop());
}

console.log(reverseOnlyVowels("sameer")); // semaer
console.log(reverseOnlyVowels("education")); // odacetuin
console.log(reverseOnlyVowels("developer")); // developer → develepor



   