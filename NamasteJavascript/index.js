// Invoked the function 
var x = 1;
a (); 
b ();
console.log(x);


function a() {
    var x = 10;
    console.log(x);   
}

function b() {
    var x = 20;
    console.log(x);
}

// Callback Hell 
const cart = ["shoes", "pants", "shirt", "kurta"];
api.createOrder(cart, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary(
            function () {
                api.updateWallet()
            }
        )
    })
})

// Callback Hell 
const cart = ["shoes", "pants", "shirt", "kurta"];
api.createOrder(cart, function () {
    api.proceedToPayment ()
})

// Real Example that causes callback hell
fs.readFile("file1.txt", function(err, data1) {
  if (err) throw err;
  fs.readFile("file2.txt", function(err, data2) {
    if (err) throw err;
    fs.readFile("file3.txt", function(err, data3) {
      if (err) throw err;
      console.log(data1, data2, data3);
    });
  });
});

// Promises passing a function 
const cart = ["shoes", "pant", "kurte"];
createOrder(cart, function (orderId) {
    proceedTopayment(orderId);
});
// To ataching a function this one is best
const Promises = createOrder(cart);
Promises.then(function (orderId) {
    proceedTopayment(orderId)
});

// 2nd
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

// ***///
createOrder(cart)
.then((orderId) => proceedTopayment(orderId))
.then((paymentInfo) => showOrderSummary(paymentInfo))
.then((paymentInfo) => updateWalletBalance(paymentInfo));

fetchData()
  .then(result => console.log("Success:", result))
  .catch(error => console.log("Error:", error))
  .finally(() => console.log("Done"));

// Costom promises
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Resolved!");
  } else {
    reject("Error occurred");
  }
});

myPromise
  .then(data => console.log(data))
  .catch(err => console.error(err));

// create apromise, chaning and Error Handling
const cart = ["shoes", "pant", "kurta", "shirt"];
const promise = createOrder(cart);  //OrderId
console.log(promise);


promise.then(function(orderId) {
    console.log(orderId);
    
    // proceedToPayment(orderId);
})
   ////Producer
   function createOrder(cart) {

    const pr = new promise(function(resolve, reject) {
        // createOrder
        // ValidateCart
        // orderId
        if(validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }
        // Logic for CreateOrder
        const orderId = "12313241";
        if(orderId) {
            setTimeout(function () {
               resolve(orderId);
            }, 5000);
          
        }
    });
    return pr;
   }
   function validateCart(cart) {
    return true;
   }


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

 
//   Example: Promise Creation, Chaining, and Error Handling
//   Step 1: Create a Promise
function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User fetched");
      resolve({ id: 1, name: "Sameer" });
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Posts fetched");
      // resolve(["Post1", "Post2"]);
      reject("Failed to fetch posts"); // simulate an error
    }, 1000);
  });
}

function getComments(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Comments fetched");
      resolve(["Nice!", "Great!"]);
    }, 1000);
  });
}

getUser()
  .then(user => {
    return getPosts(user.id);
  })
  .then(posts => {
    return getComments(posts[0]);
  })
  .then(comments => {
    console.log("Comments:", comments);
  })
  .catch(error => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Finished (success or fail)");
  });

// Promises in loop
async function runSequentially() {
  for (let i = 1; i <= 3; i++) {
    await new Promise(res => setTimeout(res, 1000));
    console.log("Step", i);
  }
}
runSequentially();

// Async/ Await withpromises
function getData() {
    return new Promise(resolve => {
        setTimeout(() => resolve ("Data received"), 1000);
    });
}
async function fetchData() {
    try {
        const data = await getData();
        console.log(data);
    } catch (err) {
        console.log(Error, err);
    }
}
fetchData();

// Using async without await
async function example() {
    return "Done"; // returns Promise.resolve("Done")
}
example().then(console.log); // Done

// Using await inside async
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function example() {
    console.log("Start");
    await delay(2000); // waits 2 seconds
    console.log("End");
}
example();



// Async and Await Combined example
function createOrder(cart) {
    return new Promise((resolve, reject) => {
        if (!cart.length) reject(new Error("Cart is empty"));
        setTimeout(() => resolve("Order1234"), 1000);
    });
}

function proceedToPayment(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Payment done for ${orderId}`), 1000);
    });
}

async function placeOrder() {
    try {
        console.log("Placing order...");
        const orderId = await createOrder(["shoes", "pants"]);
        console.log("Order ID:", orderId);

        const paymentInfo = await proceedToPayment(orderId);
        console.log(paymentInfo);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

placeOrder();
