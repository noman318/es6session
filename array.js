console.log("new methods in array");
const str = "Noman";
const arr = [9, 67, 12, 23, 45];
// console.log(Array.from(str)); // converts it into an array
// console.log(arr.findIndex((value, index, arr) => value > 18)); // it gives first index of number which is greater than 18
// console.log(arr.find((value, index, arr) => value > 18)); // it gives first the number which is greater than than 18
let keys = arr.keys();
// console.log(keys);
for (const x of keys) {
  //   console.log(x);
}
// we can get the index of a number of an array using keys properties in an array using For Of loops
