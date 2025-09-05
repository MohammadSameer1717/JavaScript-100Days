// function main () {
//     var name = "peter";
//     function sayName() {
//         console.log(name);
//     }
//     return sayName;
// }
// let fn = main();
// fn();
// fn();

// function main (name) {
//     function sayName() {
//         console.log(name);
//     }
//     return sayName;
// }
// let consolepeter = main("peter");

// consolepeter();
// consolepeter();
// consolepeter();

// function adder(num) {
//     function add(b) {
//         console.log(num + b);
//     }
//     return add;
// }
// const addTo5 = adder(5);
// const addTO10 = adder(10);
// const addTO50 = adder(50);

// addTo5(2);
// addTo5(5);

// addTO10(10)
// addTO50(50)


// const myName = document.getElementById("my-name");
// const btn = document.getElementById('my-btn')

// function makeTextSizer(size) {

//     function changeSize() {
//         myName.style.fontSize = `${size}px`;
//     }
//     return changeSize;
// }
// const size12 = makeTextSizer(12);
// const size20 = makeTextSizer(20);
// const size40 = makeTextSizer(40);
// const size70 = makeTextSizer(70);

// btn.addEventListener("click", size40);


// const myName = document.getElementById("my-name");
// const btn = document.getElementById('my-btn');

// function makeCounter() {
//     let count = 1;

//     function  increment() {
//         console.log(count++);
//     }
//     return increment;
// }
// const counter1 = makeCounter();
// counter1();
// counter1();
// counter1();
// counter1()


// All Q / A Promises

// let a = 10;
//     let b = 30;

//     let result = a + b;
//   console.log(result);
  



//  async function getData(){
//          let resultFromServer = await fetch(
//         "https://jsonplaceholder.typicode.com/todos/1"
//         );
//     console.log(await resultFromServer.json());
//   }
//   getData();



//     fetch( "https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//   console.log(result);

// // simulating API calls with setTimeout
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             let data = { id: 232, name: "sameer" };
//             resolve(data);
//         }, 2000);
//     });
// }
// fetchData()
// .then(res => console.log("Data received:",  res))
// .catch(err => console.log("Error:", err));

// Async / Await Q:1
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data recieved"), 2000);
    });
}
async function getData() {
    console.log("fetching...");
    let result = await fetchData();
    console.log(result);
}
getData();

// Example 3: Error Handling with try...catch
function fetchData() {
    return new Promise((_, reject) => {
        setTimeout (() => reject ("failed to fetch user"), 2000);
    });
}
async function getData() {
    try {
        let user = await fetchUser();
         console.log(user);
    } catch (error) {
        console.log("Error caught:", error);
    } finally {
        console.log("operation finished");
    }
}
getData();