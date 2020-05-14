let a = 1; //variable a is declared and initialized with a value of 1
console.log(`variable a = ${a}`);

const b = 1; //constant b is declared and initialized with a value of 1
console.log(`constant b = ${b}`);

let c = [2, 4, 6]; //variable c is declared and initialized with a value of an array [1,2,3]
console.log(`variable array c= ${c}`);
const d = [1, 2, 3]; //constant c is declared and initialized with a value of an array [1,2,3]
console.log(`constant d array = ${d}`);
// Operations on an array push|unshift - pop|shift
let pushMethodReturnedValue = c.push(8); // value 8 is added at the last index of array c
console.log(`8 is pushed | variable array c= ${c} | Push Returned Value = ${pushMethodReturnedValue}`); //returns the length of array
let unshiftMethodReturnedValue = c.unshift(0); // value 0 is added at the first index of array c
console.log(`0 is unshifted | variable array c= ${c} | Unshift Returned Value = ${unshiftMethodReturnedValue}`); // returns the length of array
let popMethodReturnedValue = c.pop(); // value 8 is removed at the last index of array c
console.log(`8 is poped | variable array c= ${c} | Pop Returned Value = ${popMethodReturnedValue}`); // returns the value which was removed
let shiftMethodReturnedValue = c.shift(); // value 0 is removed at the first index of array c
console.log(`0 is shifted | variable array c= ${c} | Shift Returned Value = ${shiftMethodReturnedValue}`); // returns the value which was removed

// More Operations on an array | inserting value at specific index.
c[20] = 1000; // adding an element at specific index of an array
console.log(c); // we will be getting 17 empty slots till 20th index.

// More Operations on an array | splice Method
//       0  1  2  3  4
let e = [1, 3, 5, 7, 9];
e.splice(1, 3, -1, -2, -3); // start index 1 and no of elements 3 ie 3,5,7 just delete it and third arguments say that inserts element in that place -1,-2,-3
e.splice(4, 0, 11); // start index 1 and no of elements 3 ie 3,5,7 just delete it and third arguments say that inserts element in that place -1,-2,-3
console.log(e);

// More Operations on an array | slice Method
let sliceMethod = [-4, 0, -0.5, 1, 10];
let newSliceMethod = sliceMethod.slice(); // creates the copy of an array
console.log(sliceMethod);
console.log(newSliceMethod);
console.log(newSliceMethod === sliceMethod);

let newSliceMethodRange = sliceMethod.slice(0, 2); // creates the copy of an array according to the range, start at 0 index and end at 2 index but 2nd index is not included.
console.log(sliceMethod);
console.log(newSliceMethodRange);

// More Operation on an array | concat Method
let concatMethod = [1, 3, 5, 7, 9];
let concatResult = concatMethod.concat([11, 13, 15]);
console.log(concatMethod);
console.log(concatResult);

// More Operation on an array | indexOf
let tryIndexOf = ["hello", "i", "am", "good"];
console.log(tryIndexOf.indexOf("good")); // this will find the index of an element value stored in an array.
let tryFind = [
  { id: 1, username: "sandeep" },
  { id: 2, username: "jyoti" }
];
console.log(
  "index of am" +
    tryIndexOf.findIndex((findSomething, indexSomething, ObjectSomething) => {
      return findSomething === "am";
    })
);
console.log(
  tryFind.find((findSomething, indexSomething, ObjectSomething) => {
    return findSomething.username === "sandeep";
  })
);
console.log(
  tryFind.findIndex((findSomething, indexSomething, ObjectSomething) => {
    return findSomething.username === "jyoti";
  })
);
console.log(tryIndexOf.includes("am"));

// More Operation on array using foreach and map method.
let forEachLoop = ["a", "b", "c", "d"];
let newForEachLoop = [];
let mapForEachLoop = [];
let indexArray = [];
let forEachArray = [];
let ObjectArray = [];
let ObjectBuild;
console.log(
  forEachLoop.forEach((forEachSomething, indexSomething, ObjectSomething) => {
    newForEachLoop.push([indexSomething, forEachSomething, ObjectSomething]);
    indexArray.push(indexSomething);
    forEachArray.push(forEachSomething);
    ObjectArray.push(ObjectSomething);
    ObjectBuild = ObjectSomething;
  })
);

console.log(newForEachLoop);
console.log(indexArray);
console.log(forEachArray);
console.log(ObjectArray);
console.log(ObjectBuild);

forEachLoop.map((mapSomething, indexSomething, ArraySomething) => {
  mapForEachLoop.push({ index: indexSomething, value: mapSomething });
});
console.log(mapForEachLoop);

// More Operation on the array | sort and reversing
let sortArray = [-100, 100, 0, 0.5, 50, -0.52, -560];

let sorted = sortArray.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a == b) {
    return 0;
  } else {
    return -1;
  }
});

console.log(sorted);
console.log(sorted.reverse());
// console.log(
//   let sorted = sortArray.sort((a, b) => {
//     if (a > b) {
//       return 1;
//     } else if (a == b) {
//       return 0;
//     } else {
//       return -1;
//     }
//   })
// );

// More Operation on the arrays filter | reduce
const filteredArray = sortArray.filter((filterValue, filterIndex, filterArray) => {
  return filterValue > 0;
});
console.log(filteredArray);

const reduceArray = sortArray.reduce((preValue, curValue, curIndex, sortArrayOriginal) => {
  return (preValue = preValue + curValue);
}, 1000 ** 2);
console.log(reduceArray);

// More Operation on the arrays split | Join
const data = "newyork;10.99;2000;Hello";
const dataSplit = data.split(";");
console.log(dataSplit);

const dataArray = ["Sandeep", "Dalal"];
const joinDataArrayIntoOne = dataArray.join(" ");
console.log(joinDataArrayIntoOne);

// More Operations on the arrays spread Operator for pull all element from the array
const spredOperator = ["sandeep", "dalal", "is", 25, "years", "old"];
const pullOutValue = [...spredOperator];
console.log(pullOutValue);

console.log(Math.min(...sortArray)); //will find the smallest value form the sortArray.

const objectInArray = [
  { id: 1, userName: "Sandeep" },
  { id: 2, userName: "Ajay" }
];
const copyObjectInArray = [...objectInArray]; // All objects in the array will be copied to newly array.
console.log(objectInArray, copyObjectInArray);

// Note: To keep the original Array in the copied array, if change key value pairs in future, we can do this
const exactCopyObjectInArray = [...objectInArray.map(arrayValue => ({ id: arrayValue.id, userName: arrayValue.userName }))];
console.log(exactCopyObjectInArray);

// Note: Changing value of key pairs in object will also reflect in the copied array. Because object are reference type.
objectInArray[0].id = 3;
console.log(copyObjectInArray);

// More Operations on the arrays Destructuring
const destructureArray = ["sandeep", "dalal", "Mr.", 20];
const [firstName, lastName, ...otherInformation] = destructureArray;
console.log(`firstName : ${firstName} | lastName : ${lastName} | otherInformation : ${otherInformation}`);

// i am adding a new branch now as named app-array-branch
