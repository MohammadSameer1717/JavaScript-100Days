var a = 14;
a = 16;

if (true) {
    var xyz = "test";
}
console.log(xyz);

// can be reassigned
// can be redeclared
// function scope

let b = 16;
b = 32;

// if (true) {
//     var xyz = "test";
// }
// console.log(xyz);

// can be reassigned
// cannot be redeclared
// block scopee

const c = 14;
c = 12;
// cannot be reassigned
// cannot be redeclared
// block scope


function test() {
  if(true) {
    var t1 = "test1";
    let t2 = "test2";
    const t3 = "test3";
  }

  console.log(t1);
  console.log(t2);
  console.log(t3);

}

console.log(t1);   //cat't be work t1 is a function scope variable

test();


//  day2 Arrow function


