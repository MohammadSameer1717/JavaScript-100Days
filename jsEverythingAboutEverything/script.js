// scope-- functional scope, global scope and block scope 

// function scope => function ke andar hi youse ho skta hai 
// Global scope => poore code mein kahi bhi youse ho skta hai
// Block scope => {} curly braces mein hi youse ho skta hai
// Abstract= air = Execution context = Highpothetical dibba hai or us ko run karney ke liye like memory phase and ececution phase
 
// Closures hote hai functions jo ki kisi parent fnc ke andar ho aur andar wala function return ho raha ho, and returnning function youse kare, parent function ka kio variable 
// function abcd() {
//     let a = 12;
//     return function () {
//         console.log(a);
//     };
// }
//  let fnc = abcd();
//  abcd();

// // Encapsulation 
// function clicklimiter() {
//     let click = 0;
//     return function() {
//         if (click < 5) {
//             click++;
//             console.log(`clicked : ${click} times`);
//     } else; {
//         console.error ("LIMIT EXCEEDED, TRY AFTER SOOME TIME");
//      }
//    };
// }
// let fnc = clicklimiter();
// fnc();
// fnc();

// // Toaster 
// function createToaster(config) {
//     return function(str) {
//         let div = document.createElement("div");
//         div.textContent = str;
//         div.className =
//         `inline-block ${config.theme ===  "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} 
//         px-6 py-3 rounded shadow-lg pointer-events-none `;

//         document.querySelector(".parent").appendChild(div);

//         if (config.positionX !== "left" || config.positionY !== "top") {
//   document.querySelector(".parent").className +=
//     ` ${config.positionX === "right" ? "right-5" : "left-5"}` +
//     ` ${config.positionY === "top" ? "top-5" : "bottom-5"}`;
// }

//         setTimeout(() => {
//             document.querySelector(".parent").removeChild(div);
//         }, config.duration * 1000);
//     };
// }

// let toaster= createToaster({
//     positionX: "right",
//     positionY: "top",
//     theme: "dark",
//     duration: 3,
// });
// toaster("Download Done");
// setTimeout(() => {
//     toaster("Download peter funnction Done");
// }, 3000);


// // Closures.js (Akshay saini)
// function x() {
//     var a = 21;
//     function y() {
//         console.log(a);
//     }
//     // a = 100;
//     return y;
// }
// var z = x();
// console.log(z);
//......
// z();
// // it's simples same like same
// function x() {
//     var a = 21;
//      return  function y() {
//         console.log(a);
//     }
// }
// var z = x();
// console.log(z);
// //......
// z();
// // third variation in closures
// function functionz() {
//     var b = 333;
//     function x() {
//         var a = 21;
//         function y() {
//             console.log(a, b);
//         }
//         y();
//     }
//     x();
// }

// functionz(); 
// // setTimeout + Closures
// function x() {
//     var i = 11;
//     setTimeout(function () {
//         console.log(i);
//     }, 3000);
//     console.log("Namaste JavaScript");
// }
// x();
// // setTimeout + Closures 2 variation
// function x() {
//    for  (var i = 1; i <= 5; i++){
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }
//     console.log("Namaste JavaScript");
// }
// x();
// // setTimeout + Closures 3 variation please check this var remove to let but let is not a good way
// function x() {
//    for  (var i = 1; i <= 5; i++){
//     function close(x) {
//          setTimeout(function () {
//         console.log(x);
//     }, x * 1000);
//     }
//     close(i);
// }
//     console.log("Namaste JavaScript");
// }
// x();

// // This keyword special keyword in javascript like global scope
// console.log (this);

// function abcd (){
//     console.log();
// }
// abcd();
// let obj = {
//     name: "peter",
//     age: 25,
//     sayName: function() {
//         console.log(this.name);
        
//     },
// };
// obj.sayName();
 
// // Event Handler
// document.querySelector("h1").addEventListener("click",
//     function() {
//         console.log((this.style.color = "red"));
//     });

//     // Class
//     class abcd {
//         constructor() {
//             console.log();
//             this.a = 12;
//         }
//     }
//  let val = new abcd();
// //  2nd method ke andar object
//  let obj = {
//     name: "peter",
//     age: 25,
//     sayName: function() {
//         function defg() {
//             console.log(this);
//         }
//         defg();
//     },
//  };
//  obj.sayName();
// //  window object in class
//   let obj1 = {
//     name: "peter",
//     age: 25,
//     sayName: function() {
//         let defg = () => {
//             console.log(this);
//         }
//         defg();
//     },
//  };
//  obj.sayName();

// // call apply bind
// // function ko call karte WAQT aap set kr skte ho ki uski this ki value kya hohi
// let obj = {
//     name: "peter",
// };
// function abcd(){
//     console.log(this);
// }
// abcd.call(obj);
// // same to same hai 
// let obj2 = {
//     name: "peter",
//     age:12,
// };
// function abcd(a, b, c) {
//     console.log(this, a, b, c);
// }
// abcd.call(obj, 1, 2, 3);

// // apply
// let obj2 = {
//     name: "peter",
//     age:12,
// };
// function abcd(a, b, c) {
//     console.log(this, a, b, c);
// }
// abcd.apply(obj, [1, 2, 3]);

// // bind
// let obj3 = {
//     name: "peter",
//     age:12,
// };
// function abcd(a, b, c) {
//     console.log(this, a, b, c);
// }
// let fuc = abcd.bind(obj, 1, 2, 3);
// fuc();

// // Phase 3 OOPS
// function createBiscuit(name, price, qty, company, category) {
//     this.name = name;
//     this.price = price;
//     this.qty = qty;
//     this.company = company;
//     this.category = category;
// }
// let biscuit1 = new createBiscuit("Oreo", 10, 5, "Nestle", "Chocolate");
// let biscuit2 = new createBiscuit("Parle", 10, 5, "Cadbury", "Strubery");

// // Class or Object Quetion
// let coffee = {
//     color: "dark",
//     drink:function () {
//         console.log("gut gut gut");
//     },
// };
// let arabiataCoffee = Object.create(coffee);
//  arabiataCoffee.taste = "better";
//  arabiataCoffee.drink();


// // Callback, Promises And Async/Await
// console.log("how1");
// console.log("how2");
// setTimeout (() => {
//     console.log("how3");
// },3000);
// console.log("how4");


// Aync  /  Async

// function KuchhDerBaadChalunga (val) {
//     setTimeout(() => {
//         console.log((val));
//     },
//      Math.floor(Math.random()*10) * 1000
//     );
// }
// KuchhDerBaadChalunga(12);


// // 2nd cll back function hai
// function KuchhDerBaadChalunga (fnc) {
//     setTimeout(fnc, Math.floor(Math.random()*10) * 1000);
// }
// KuchhDerBaadChalunga(function() {
//     console.log("peter");
// });

// call back function
// function ProfileLekarAao(username, cb) {
//     setTimeout(() => {
//         console.log(`Profile fetcched of ${username}`);
//         cb ({ username });
//     }, 2000);
// }
// ProfileLekarAao("peter", function (profileData) {
//     console.log(profileData);
// });

// // 2nd call back hell
// function ProfileLekarAao(username, cb) {
//     console.log("fetching profile data...");
//     setTimeout(() => {
//         cb ({ _id: 1234, username, age: 23, email: "peter@gmail.com" });
//     }, 2000);
// }
//  function saarePostLekarAao (id, cb) {
//     console.log("fetching all data...");
//     setTimeout (() => {
//         cb({ _id, posts: ["hey", "peter", "goodnight"] });
//     }, 3000);
// }
// ProfileLekarAao("[peter", function (data) {
//     console.log(data);
//     saarePostLekarAao(data._id, function (posts) {
//         console.log(posts);
//     });
// });

// // 3nd cal back Hell
// function ProfileLekarAao(username, cb) {
//     console.log("fetching profile data...");
//     setTimeout(() => {
//         cb ({ _id: 1234, username, age: 23, email: "peter@gmail.com" });
//     }, 2000);
// }
//  function saarePostLekarAao (id, cb) {
//     console.log("fetching all data...");
//     setTimeout (() => {
//         cb({ _id, posts: ["hey", "peter", "goodnight"] });
//     }, 3000);
// }
// function savedPostsNikaalo(id, cb) {
//     console.log("fetching saved posts...");
//     setTimeout(() => {
//         cb({ _id, posts: [1, 2, 3, 34, 44, 443] });
//     }, 3000);
// }

// ProfileLekarAao("[peter", function (data) {
//     console.log(data);
//     saarePostLekarAao(data._id, function (posts) {
//         console.log(posts);
//         savedPostsNikaalo(data._id, function (saved) {
//             console.log(saved);
            
//         });
//     });
// });

// // Promises
// let pr = new Promise(function (res, reject) {
//     setTimeout(() => {
//         let rn = Math.floor(Math.render() * 10);
//         if (rn > 5) res("resolved with" + rn);
//         else reject("reject with" + rn);
//     }, 3000);
// });

// pr.then(function (val) {
//     console.log(val);
// }).catch(function(val) {
//     console.log(val);
// });

// // Promises
// let pr = new Promise(function (res, reject) {
//     setTimeout(() => {
//         let rn = Math.floor(Math.render() * 10);
//         if (rn > 5) res("resolved with" + rn);
//         else reject("reject with" + rn);
//     }, 2000);
// });

// async function abcd() {
//     try {
//         let val = await pr;
//         console.log(val);
//         } catch (err) {
//         console.log(err);
//     }
// }
// abcd();

// // feching API
// fetch("#")
// .then((rawdata) => {
//     console.log(rawdata);
// })
// .catch((err) => {
//     console.log(err);
// });