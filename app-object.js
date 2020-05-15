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

// order of key-value pairs in an object.
// Note: if key are (string) or (mixer of string and numbers) then order will be according to key-pair added to that object and numbered key will be arranged first.
const dMixObject = { id: 2, "first name": "ajay", 1: "rank" };
console.log(dMixObject); // means  1 , id , first name

// Note: if keys are only number and should be positive no including 0.
const dNumberObject = { 10: "123456789", 0: "id", 5: "name", 1: "title" };
console.log(dNumberObject); // means  0 , 1 , 5, 10

// setting key as dynamically.
const userName = "userId";
const eDynamicObject = {
  [userName]: 1, // means userId:1 ie setting value dynamically
  userEmail: "sandeepdalal1995@gmail.com"
};
console.log(eDynamicObject);
const userMail = "userEmail";
console.log(eDynamicObject[userMail]); // fetching value dynamically

// working with this keyword | this refers to whose is basically responsible for calling it.
console.log(this); //here 'this' refers to window object

const thisKeywordObject = {
  id: 1,
  username: "sandeep",
  greetWithArrowFunction: () => {
    console.log(this); // here 'this' refers to window object
    console.log(this.id); // here 'this.id' refers to 'window.id', gives undefined value
  },
  greetWithoutArrowFunction: function() {
    console.log(this); // here 'this' refers to 'thisKeywordObject' object, gives complete Object data
    console.log(this.id); // here 'this.id' refers to 'thisKeywordObject.id', gives 1 as value
    // console.log(greetWithArrowFunction);
  },
  greet() {
    console.log(this); // here 'this' refers to 'thisKeywordObject' object, gives complete Object data
    console.log(this.id); // here 'this.id' refers to 'thisKeywordObject.id', gives 1 as value
  }
};

console.log(thisKeywordObject);

thisKeywordObject.greetWithArrowFunction();
thisKeywordObject.greetWithoutArrowFunction();
thisKeywordObject.greet();

// Working more on this keyword
// 1) this in Global Context (i.e. outside of any function)
function somethingThis1() {}

console.log(this); // logs global object (window in browser) - ALWAYS (also in strict mode)!

// 2) this in a Function (non-Arrow) - Called in the global context
function somethingThis2() {
  console.log(this);
}

somethingThis2(); // logs global object (window in browser) in non-strict mode, undefined in strict mode

// 3) this in an Arrow-Function - Called in the global context
const somethingThis3 = () => {
  console.log(this);
};

somethingThis3(); // logs global object (window in browser) - ALWAYS (also in strict mode)!

// 4) this in a Method (non-Arrow) - Called on an object
const person1 = {
  name: "sandeep",
  greet: function() {
    // or use method shorthand: greet() { ... }
    console.log(this.name);
  }
};

person1.greet(); // logs 'Sandeep', "this" refers to the person object

// 5) this in a Method (Arrow Function) - Called on an object
const person2 = {
  name: "Sandeep",
  greet: () => {
    console.log(this.name);
  }
};

person2.greet(); // logs nothing (or some global name on window object), "this" refers to global (window) object, even in strict mode

// Working more on this keyword, how it is called with respect to it, more with objects
//  Case 1
const personObject1 = {
  name: "Sandeep",
  greet() {
    console.log(this); // ??? => therefore 'this' refers to 'personObject1'.
    console.log(this.name); // ??? => therefore 'this.name' to 'personObject1.name'.
  }
};

personObject1.greet(); // note: here personObject1 is responsible for calling this function greet. If you found any this inside that function means it is pointing the the object who is responsible for calling this function.

// Case 2
const personObject2 = {
  name: "Sandeep",
  greet() {
    console.log(this); // ??? => therefore 'this' refers to 'personObject2'
    console.log(this.name); // ??? => therefore 'this.name' refers to 'personObject2.name'
  }
};

const adminObject = { age: 30 };

adminObject.greet = personObject2.greet; //here value is assigned to adminObject with key greet as function.
// personObject2.greet(); // here personObject2 is responsible for calling it
// therefore now adminObject will look like this.
// const adminObject = {
//   age: 30,
//   greet() {
//     console.log(this); // ??? => therefore 'this' refers to 'adminObject', value will be complete adminObject
//     console.log(this.name); // ??? => therefore 'this.name' refers to 'adminObject.name', value will be undefined because name key do not exists in adminObject.
//   }
// };
adminObject.greet(); // here adminObject is responsible for calling greet which there in adminObject

// Case 3
const personObject3 = {
  name: "Sandeep",
  greetObject3() {
    console.log(this); // ??? => therefore 'this' refers to 'window' global object, value will be window object
    console.log(this.name); // ??? => therefore 'this.name' refers to 'window.name', value will be undefined/or null because name key do not exists in window object.
  }
};

const { greetObject3 } = personObject3; // Object destructuring
greetObject3(); // this is called like this 'window.greet();'

// Case 4
const personObject4 = {
  name: "Sandeep",
  greetObject4() {
    console.log(this); // ??? => therefore 'this' refers to 'window' global object, value will be window object
    console.log(this.name); // ??? => therefore 'this.name' refers to 'window.name', value will be undefined/or null because name key do not exists in window object.
  }
};

const { greetObject4 } = personObject4; // Object destructuring
greetObject4.call(this); //here this refers to window object. so calling this function
greetObject4.apply(this); // an alternative to call methods defined in object.
greetObject4.call(window); // an alternative to call methods defined in object.

// Case 5
const personObject5 = {
  name: "Sandeep",
  greetObject5() {
    console.log(this); // ??? => therefore 'this' refers to 'personObject5' global object, value will be personObject5 object
    console.log(this.name); // ??? => therefore 'this.name' refers to 'personObject5.name', value will be 'sandeep' because name is the key in this personObject5 object.
  }
};

const { greetObject5 } = personObject5;
greetObject5.call(personObject5); //here personObject5 refers to personObject5 object. so calling this function.

// selectBtn;
// console.dir(document.getElementById("selectBtn"));
// const buttonAdded = document.getElementById("buttonAppendHere");
// document.createElement("BUTTON").append("buttonAdded");
// console.dir(document.createElement("button"));
