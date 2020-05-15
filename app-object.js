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

// special key names and square bracket property access
const bObject = { id: 2, "first name": "ajay" }; // here "first name" is the key
// console.log(bObject.first name); // this is not possible to access like this.
console.log(bObject["first name"]); // To access the value of 'first name' key, we use square bracket and passing as string with inverted commas.
console.log(bObject.id); // this is possible
console.log(bObject["id"]); // an alternative

// keys as numbers
const cNumberKeyObject = { 1: "id", 2: "sandeep" };
console.log(cNumberKeyObject);
console.log(cNumberKeyObject[1]); // here javascript totally understand it is a number.
console.log(cNumberKeyObject["1"]); // an alternative becz javascript converts everything as string.

// selectBtn;
// console.dir(document.getElementById("selectBtn"));
// const buttonAdded = document.getElementById("buttonAppendHere");
// document.createElement("BUTTON").append("buttonAdded");
// console.dir(document.createElement("button"));
