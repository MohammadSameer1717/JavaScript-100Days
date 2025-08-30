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

// All Qeustion in Closure like Data hiding, Private Variable and function foctories
function counter () {
let count = 0;
return function () {
  count++;
  return count;
};
}
const C = counter();
console.log(C());
console.log(C());
console.log(C());

// 2nd Example Private Variable

function bankAccount(initialBalance) {
  let balance = initialBalance; // private variable

  return {
    deposit: function (amount) {
      balance += amount;
      return balance;
    },
    withdraw: function (amount) {
      if (amount <= balance) {
        balance -= amount;
      } else {
        console.log("Insufficient funds!");
      }
      return balance;
    },
    getBalance: function () {
      return balance;
    }
  };
}

const myAccount = bankAccount(1000);
console.log(myAccount.deposit(500));  // 1500
console.log(myAccount.withdraw(200)); // 1300
console.log(myAccount.getBalance());  // 1300
//Hinglish: Balance ko direct change nahi kar sakte, 
// sirf deposit/withdraw methods ke through hi. Yeh private variable hai.

// 3rd Function Factory (Multiplier Example)
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
// Hinglish: Ek hi factory se double, 
// triple jaisi customized functions ban gaye.

// 4rd “Remax Variation” (Event Listener Closure)
function attachEvent() {
  let count = 0;
  document.getElementById("btn").addEventListener("click", function () {
    count++;
    console.log("Button clicked:", count, "times");
  });
}
attachEvent();
// Button click karne par closure count ko yaad rakhta hai har click ke liye.