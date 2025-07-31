 
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = innerText + "BY PETER";  //concatenate
 
let divs = document.querySelectorAll(".box");
let idx = 1;

for (let div of divs) {
   div.innerText = `new unique value ${idx}`;
   idx++;
}


// divs[0].innerText = "new unique value 1";
// divs[2].innerText = "new unique value 2";
// divs[3].innerText = "new unique value 3";


let div = document.querySelector("div");

div.style.backgroundColor="green";
div.style.backgroundColor="purple";
// div.style.visibility = "hidden";

div.style.fontSize = "25px";

// div.innerText = "hello";


let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am Majnu.Bhai</i>";

document.querySelector("body").prepend(newHeading);


let para = document.querySelector("p");
para.remove();    // Delete element

newHeading.remove();  //delete majnu bhai

// Quet 1
let newBtn = document.createElement("button");
newBtn.innerText = "click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);

// Quet 2
let para = document.querySelector("p");