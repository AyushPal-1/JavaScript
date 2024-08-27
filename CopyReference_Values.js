
// Array Copy

let arr = [1,2,3,4,5,6,7,8,9]
console.log(arr);
let copy = [...arr]
copy.pop()
console.log("Copy:", copy);
console.log("Original:", arr);

// Object Copy

let obj = {
    name: "Ayush",
    age: 20
}
console.log(obj);
let objCopy = {...obj}
objCopy.age = 21
console.log(objCopy);
