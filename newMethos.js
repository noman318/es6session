console.log("new type of Function in ES6");
// The arrow function sin Js
// var x = function (x, y) {
//   return x * y;
// };
// console.log(x(2, 3));
// Older versoion of function that where used in js before arrow functions
// reduced number of line of code and no need of return statement in most of cases
const x = (x, y) => x * y;
// console.log(x(4, 3));
var result = {
  name: "Hello",
  data: function data() {
    setTimeout(
      function () {
        console.log(this.name);
      }.bind(this),
      5000
    );
  },
};
// console.log(result.data());

const result1 = {
  name: "Hello",
  data: function data() {
    setTimeout(() => {
      console.log(this.name);
    }, 5000);
  },
};
// console.log(result1.data());

// With the bind() method, an object can borrow a method from another object. The example below creates 2 objects (person and member). The member object borrows the fullname method from the person object:
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = person.fullName.bind(member);
// console.log(fullName());
