console.log("spread operators in Js");
// const str = "Noman";
// let a = [...str];
// console.log(a);
// converts it to array
// const sum = (a, b, c) => {
//   console.log(a + b + c);
// };
// sum(...arr);
// console.log(arr);
// sum.apply(null, arr);
// let arr = [2, 9, 3, 4, 55, 67];
// let arr1 = [45, 78, 56];
// let arr2 = [45, 78, 56];

// // arr = arr.concat(arr1);
// arr = [...arr, ...arr1, 90, ...arr2];
// console.log(arr);

let arrc1 = [2, 3, 4, 5];
let arrc3 = [2, 3, 4, 5];
let arrc2 = [...arrc1, 8, 9, ...arrc3, 67];

// console.log(arrc2);
// console.log(arrc1);
// convert an object into an array
// let arrayLike = { 0: 1, 1: 2, 2: 3, 3: 7, 4: 8, length: 5 };
// let newArray = Array.from(arrayLike);

// console.log(newArray); // [1,2,3]
