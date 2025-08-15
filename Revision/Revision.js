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

// Real Example caused that callback Hell 
fs.readFile("file", function(err, data1) {
    if(err) throw err;
    fs.readFile("file2.txt", function(err, data2) {
        if(err) throw err;
        fs.readFile("file", function(err, data3) {
            if (err) throw err;
            console.log(data1, data2, data3);
        })
    })
})

// Promises passing a function 
const cart1 = ["shoes", "pant", "kurte"];
createOrder(cart, function (orderId) {
    proceedTopayment(orderId);
});
// To ataching a function this one is best
const Promises = createOrder(cart);
Promises.then(function (orderId) {
    proceedTopayment(orderId)
});

// // 2nd
const GITHUB_API = "https://github.com/";
const user = fetch(GITHUB_API);
console.log(user);

 const cart = ["shoes", "pant", "kurte"];
createOrder(cart, function (orderId) {
    proceedTopayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function () {
            updateWalletBalance();
        });
    });
});
 
createOrder(cart)
.then(function (orderId) {
 return proceedTopayment(orderId);
})
.then(function (paymentInfo) {
 return proceedTopayment(paymentInfo);
})
.then(function (paymentInfo) {
 return proceedTopayment(paymentInfo);
});

// // ***///
createOrder(cart)
.then((orderId) => proceedTopayment(orderId))
.then((paymentInfo) => showOrderSummary(paymentInfo))
.then((paymentInfo) => updateWalletBalance(paymentInfo));

fetchData()
  .then(result => console.log("Success:", result))
  .catch(error => console.log("Error:", error))
  .finally(() => console.log("Done"));

// Order
createOrder(cart)
.then(function (orderId) {
 return proceedTopayment(orderId);
})
.then(function (paymentInfo) {
 return proceedTopayment(paymentInfo);
})
.then(function (paymentInfo) {
 return proceedTopayment(paymentInfo);
});

createOrder(cart)
.then((orderId) => proceedTopayment(orderId))
.then((paymentInfo) => showOrderSummary(paymentInfo))
.then((paymentInfo) => updateWalletBalance(paymentInfo));
