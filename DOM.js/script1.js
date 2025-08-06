// // feching API
fetch("https://jsonplaceholder.typicode.com/users")
.then((rawdata) => {
    console.log(rawdata);
})
.catch((err) => {
    console.log(err);
});

// // feching API with JSON
fetch("https://jsonplaceholder.typicode.com/users")
.then((rawdata) => {
 return rawdata.json();
})
.then((data) => {
    console.log(data.result[0].name.first);
    
})
.catch((err) => {
    console.log(err);
});

// feching API with JSON
fetch("https://randomuser.me/api/?results=3")
.then((row) => row.json())
.then((data) => {
    data.result.forEach(function (user) {
        console.log(user.name);
    });
});