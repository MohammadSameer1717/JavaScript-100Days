var arr1 = [23, 34, 45, 56,67 , 78];
console.log(arr1.length);

var newLenght = arr1.push(11);

// console.log(arr1);

console.log(newLenght);
console.log(arr1);

// remove the last element in arr1
var element = arr1.pop();

console.log(arr1);

console.log(element);


var arr1 = [23, 34, 45, 56,67 , 78];
// remove start element in this arr1
arr1.shift();
arr1.unshift(12);
console.log(arr1);

var arr1 = [23, 34, 45, 56, 67, 88, 99, 78];
// arr1.splice(4, 0 , 17,and on so  );
arr1.splice(4, 2 , 1, 17);
console.log(arr1);


var arr1 = [23, 34, 45, 56, 67, 88, 99, 78];

var newArr = arr1.slice(3);
console.log(newArr);
console.log(arr1);


// REST OPERATOR and 

let user = {
  id: 191,
  name: "salman",
  address: "nwknjskmlcsc",
  password: "12432422",
  email: "peter@gmail.com",
  isActive: true,
  products: ["products1", "products2", "products3"],
};

let { id, name, email, isActive } = user;
id: 55;
console.log(id);
console.log(user);


let user = {
  id: 191,
  name: "salman",
  address: "nwknjskmlcsc",
  password: "12432422",
  email: "peter@gmail.com",
  isActive: true,
  products: ["products1", "products2", "products3"],
  class: {
    id: 17,
    className: "B.tech",
    year: 2024,
  },
};

 let { products, email, ...userObj } = user;
 console.log(products);
 console.log(email)
 console.log(userObj);



 const { className, year } = user.class;
 console.log(className);

 const { class: { className, year} } = user;
 console.log(className);


const { class: classObj, ... userObj} = user;
console.log(classObj);
console.log(userObj);


var arr1 = ["abc", "pqr"];
var arr2 = [23,45];
var arr3 = [true, false];

var combinedArray = arr2.concat(arr1, arr3);
var test = combinedArray.toString();
var test2 = combinedArray.join(" * ");

var check = combinedArray.includes("xyz");

console.log(combinedArray);
console.log(test);
console.log(test2);
console.log(check); 




