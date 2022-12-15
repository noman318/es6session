console.log("rest parameters in ES6");

//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array
// Normally how it worked in es5
// if we wanted to pass extra arguments while calling the function we have to pass it to parameters also
function sum(a, b, c) {
  console.log(a + b + c);
}
// it will obviously not take the 3rd argument
// sum(6, 9, 2, 9);
// sum(6, 9, 2);

// NOW IN ES6 WE CAN EASILY PASS N NUMBER OF ARGUMENTS WHILE CALLING THE ELMENTS
// eg.
const sum2 = (...args) => {
  console.log(...args);
  // it converts all args as Array and runs the loop in our case and logs the output to us.
  let tot = 0;
  for (const i of args) {
    tot += i;
  }
  console.log(tot);
};
// sum2(1, 2, 3, 4, 5, 5, 6, 7, 8);
// sum2(1, 2, 3);
function fun(a, b, ...c) {
  console.log(`${a} ${b}`);
  console.log(c);
  console.log(c[0]);
  console.log(c.length);
  console.log(c.indexOf("rocket"));
  console.log(c.includes("tom"));
}
fun("tom", "cat", "harry", "potter", "drax", "rocket");
// the iterator will start from harry because 1st two args will be taken as normally function does
