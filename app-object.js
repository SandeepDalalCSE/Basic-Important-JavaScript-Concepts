// Object are key-value pairs and important-note: they reference type.
const aObject = { id: 1, username: "sandeep" }; // here aObject is pointing to the address in the memory. where it stores the data.
console.log(aObject);
console.dir(aObject); // you see complete structure of aObject variable.

// If we want to add more key-value, if we haven't added it in an Object before. say in aObject.
// object.key = value
aObject.userEmail = "sandeepdalal1995@gmail.com";
aObject.age = 32;
console.log(aObject);

// If we want to delete any property/key-value pair
delete aObject.userEmail; // userEmail key-value pair is deleted.
console.log(aObject);

// selectBtn;
// console.dir(document.getElementById("selectBtn"));
// const buttonAdded = document.getElementById("buttonAppendHere");
// document.createElement("BUTTON").append("buttonAdded");
// console.dir(document.createElement("button"));
