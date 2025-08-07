// // Invoked the function 
// var x = 1;
// a (); 
// b ();
// console.log(x);


// function a() {
//     var x = 10;
//     console.log(x);   
// }

// function b() {
//     var x = 20;
//     console.log(x);
// }

// // Callback Hell 
// const cart = ["shoes", "pants", "shirt", "kurta"];
// api.createOrder(cart, function () {
//     api.proceedToPayment(function () {
//         api.showOrderSummary(
//             function () {
//                 api.updateWallet()
//             }
//         )
//     })
// })

// // Callback Hell 
// const cart = ["shoes", "pants", "shirt", "kurta"];
// api.createOrder(cart, function () {
//     api.proceedToPayment ()
// })

// // Real Example that causes callback hell
// fs.readFile("file1.txt", function(err, data1) {
//   if (err) throw err;
//   fs.readFile("file2.txt", function(err, data2) {
//     if (err) throw err;
//     fs.readFile("file3.txt", function(err, data3) {
//       if (err) throw err;
//       console.log(data1, data2, data3);
//     });
//   });
// });

// // Promises passing a function 
// const cart = ["shoes", "pant", "kurte"];
// createOrder(cart, function (orderId) {
//     proceedTopayment(orderId);
// });
// // To ataching a function this one is best
// const Promises = createOrder(cart);
// Promises.then(function (orderId) {
//     proceedTopayment(orderId)
// });

// // 2nd
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

// // ***///
// createOrder(cart)
// .then((orderId) => proceedTopayment(orderId))
// .then((paymentInfo) => showOrderSummary(paymentInfo))
// .then((paymentInfo) => updateWalletBalance(paymentInfo));

// fetchData()
//   .then(result => console.log("Success:", result))
//   .catch(error => console.log("Error:", error))
//   .finally(() => console.log("Done"));

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


// promise.then(function(orderId) {
//     console.log(orderId);
    
//     // proceedToPayment(orderId);
// })
//    ////Producer
//    function createOrder(cart) {

//     const pr = new promise(function(resolve, reject) {
//         // createOrder
//         // ValidateCart
//         // orderId
//         if(validateCart(cart)) {
//             const err = new Error("Cart is not valid");
//             reject(err);
//         }
//         // Logic for CreateOrder
//         const orderId = "12313241";
//         if(orderId) {
//             setTimeout(function () {
//                resolve(orderId);
//             }, 5000);
          
//         }
//     });
//     return pr;
//    }
//    function validateCart(cart) {
//     return true;
//    }


// create apromise, chaning and Error Handling
//  Consumer Code
const cart = ["shoes", "pant", "kurta", "shirt"];

createOrder(cart) // returns a Promise
  .then(function (orderId) {
    console.log("Order ID:", orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log("#", paymentInfo);
  })
  .catch(function (err) {
    console.log("Error:", err.message);
  });


// Producer Functions

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    // Validate the cart
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
      return;
    }

    // Simulate order creation
    const orderId = "12313241";

    setTimeout(function () {
      resolve(orderId);
    }, 3000); 
  });
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    // Simulating payment success
    setTimeout(() => {
      resolve("Payment Successful for Order ID: " + orderId);
    }, 2000);
  });
}

function validateCart(cart) {
  return cart.length > 0;
}

 
  