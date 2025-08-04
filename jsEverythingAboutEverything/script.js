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
function clicklimiter() {
    let click = 0;
    return function() {
        if (click < 5) {
            click++;
            console.log(`clicked : ${click} times`);
    } else; {
        console.error ("LIMIT EXCEEDED, TRY AFTER SOOME TIME");
     }
   };
}
let fnc = clicklimiter();
fnc();
fnc();

// Toaster 
function createToaster(config) {
    return function() {
        let div = document.createElement("div");
        div.className =
        "fixed bg-gray-800 text-white px-6 py-3 rounded shadow-lg pointer-events-none";
    };
}

createToaster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration: 3,
});
toaster("This is a dummy notification !");