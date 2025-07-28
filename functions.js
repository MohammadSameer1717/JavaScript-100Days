// Immediately Invoked function Expressions

(function (num1) {
    if (num1 % 2 ===  0) {
        console.log("Even");
        
    } else {
        console.log("odd");
        
    }
}) (23);

// find the tringle area using function 


function areaTrinangle(side1, side2, side3) {
    if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
        var s = (side1 + side2 + side3) / 2;
        var area = Math.sqrt(s * (s-side1) * (s-side2) * (s-side3));
        return area 
       } else {
        console.log("Triangle is not valid");
        return 0;
    }
}

var printArea = areaTrinangle(5,6,6);
console.log("'area of triangle :", printArea);

var numArr = [25,36,85,49,89];
function findMaxMin(arr) {
    var max = Math. max (...arr);
    var min = Math. min (...arr);
 
    console.log("Maximum :", max);
    console.log("Minimim :", min);
        
}
findMaxMin(numArr);
