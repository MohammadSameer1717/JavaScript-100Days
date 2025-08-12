// Using Async/Await (Cleaner Syntax)
 async function getPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
getPost();

console.log(a);
var a= 10;
 console.log(a);
 
console.log(" Revision.js is running!");

function a() {
    var a = 10;
    console.log(a);
}
a();

function b () {
    let b = 20;
    console.log(b);
}
b();
function b () {
    const b = 30;
    console.log(b);
}
b();

// callback Hell
const cart = ["peter", "saddi", "samarth", "salman"];
api.createOrder(cart, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary(
            function () {
                api.updateWallet()
            }
        )
    })
});

const cart1 = ["peter", "saddi", "samarth", "salman"];
api.createOrder(cart, function () {
    api.proceedToPayment(function () {
    });
});