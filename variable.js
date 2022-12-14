// GLOBAL DECLARATION
const pi = 3.14; // perfect declaration of constant variable
// console.log(pi);
// const pi = 2; // can't redeclare an constant variable
// SyntaxError: Identifier 'pi' has already been declared
// const s; // we can't just declare the variable in case of constant
//SyntaxError: Missing initializer in const declaration
// in this case it's a global declaration so the value of PI is 3.14 anywhere globally untill and unless it's not in scope that means {} curly braces
{
  // NOTE : THE BEST USE CONSTANTS IS FOR VARIABLE THAT WILL NEVER CHANGE IT'S VALUE THROUGH OUT THE WHOLE PROGRAM LIKE IN OUR CASE VALUE OF PI IS CONSTANT
  const pi = 3;
  //   pi++; // TypeError: Assignment to constant variable.
  //   console.log(pi);
}
// console.log(pi);
// (
//     const b = 9
// )
// Rounded brackets don't create a new scope only curly braces {} create a new scope

// Let is also a block scope variable it's similar to const
// But it can initialised later and it's re initialised later in that scope only
// Eg.
let hi = "Hello";
// let hi = 0; SyntaxError: Identifier 'hi' has already been declared u can't redeclare a LET variable also u can only reinitailze it
hi = 3;
// console.log(hi);
{
  // value of hi did'nt vhanged because it's in a differenr scope
  let hi; // u can just declare the varaible in case of let only
  hi = 9;
  hi++; // we can do this with let variable as it allows to be reinitialised later
  //   console.log(hi);
}
// THAT'S IT ABOUT SCOPING AND NEW VARIABLES
// NOW WHY WE NEED LET AND CONST IN THE FIRST PLACE
var ad = 80;
// console.log(ad);
ad = 90;
// console.log(ad);
{
  var ad = 100;
  //   console.log(ad);
}
// IN CASE OF THERE VAR IS GLOBAL SCOPE THE VALUE OF VAR CAN ANYWHERE THROUGHOUT THE PROGRAM SO IT CAN INTRODUCE POTENTIAL BUGS AND UNSOLVED ERRORS BECAUSE IT GIVES US ACCESS TO REINITIALIZED UNLIMITED NUMBER OF TIMES
// WE ARE DONE WITH ALL TYPES VARIABLE DECLARATION IN JS
