var product1 = {
    id: 1234,
    name: "xyz",
    const: 5000,
    category: "Random",
};

var product2 = {
    name: "abc",
    createdAt: new Date()
};

this is the method of objectmethods.js******

Object.assign(product1, product2);
console.log(product1);

var check = Object.entries(product1);
console.log(check);


var check =Object.keys(product1);
var check1 = Object.values(product1);

console.log(check);
console.log(check1);



 var user = {
    id: 1234,
    name: "abc",
    emial: "abc@gmail.com"
};
// Object.freeze(user);
Object.seal(user);

// user["test"] = "nmcunfwe";

// user.name = "test";

// delete user.id;

console.log(user);
