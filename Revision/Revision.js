 let age = 25;
 if (age >= 20) {
 console.log("you can vote");
 }
 
// Example: 2 if-else
  age = 15;
if (age >= 20) {
  console.log("you can be Vote now");
} else {
  console.log("you cannot be Vote now ");
};

// Example: 3 if-else if-else
  let marks = 77;
if (marks >= 90) {
  console.log("Grade A");
}  else if (marks >= 75) {
  console.log("grade B");
} else if (marks >= 50) {
  console.log("Grade C");
  
} else {
  console.log("fail");
  
};

// Example 4: Nested if
let age = 25;
let hasID = true;

if (age >= 18) {
  if (hasID) {
    console.log("You can enter the club");
  } else {
    console.log("ID required");
  }
} else {
  console.log("You are underage");
}

// Example: 5 Switch case
let color = "green";

switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Wait");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid color");
}

Exercise 1: Fibonacci Series (0 1 1 2 3 5 …)

let n = 10; 
let a = 0, b = 1;

console.log("Fibonacci Series:");
for (let i = 1; i <= n; i++) {
  console.log(a);
  let next = a + b;
  a = b;
  b = next;
}

// Exercise 2: Factorial (n!)
let num = 5;
let fact = 1;

for (let i = 1; i <= num; i++) {
  fact *= i;
}
console.log("Factorial of", num, "=", fact); 

// Exercise 3: Prime Numbers up to n
let n = 20;

console.log("Prime numbers up to", n, ":");

for (let i = 2; i <= n; i++) {
  let isPrime = true;
  
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  
  if (isPrime) {
    console.log(i);
  }
}

