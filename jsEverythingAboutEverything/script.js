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

// Toaster 
function createToaster(config) {
    return function(str) {
        let div = document.createElement("div");
        div.textContent = str;
        div.className =
        `inline-block ${config.theme ===  "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} 
        px-6 py-3 rounded shadow-lg pointer-events-none `;

        document.querySelector(".parent").appendChild(div);

        if (config.positionX !== "left" || config.positionY !== "top") {
  document.querySelector(".parent").className +=
    ` ${config.positionX === "right" ? "right-5" : "left-5"}` +
    ` ${config.positionY === "top" ? "top-5" : "bottom-5"}`;
}

        setTimeout(() => {
            document.querySelector(".parent").removeChild(div);
        }, config.duration * 1000);
    };
}

let toaster= createToaster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration: 3,
});
toaster("Download Done");
setTimeout(() => {
    toaster("Download peter funnction Done");
}, 3000);
 