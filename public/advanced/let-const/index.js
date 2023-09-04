/**
 * Let const
 * Error type 
 * a) ReferenceError
 * b) SyntaxError
 * c) TypeError
 */


console.log(a) // ReferenceError : It will give referance error a is not defined
let a = 10;
const c = 100;
c = 1000; // TypeError: It will give Type Error Assignment to constant variable.
//let a = 10; //SyntaxError: it will give syntax error Identifier 'a' has already been declared
console.log(a);
var b = 100;

/**
 * Temproal Dead Zone
 * A variable declared with let, const, or class is said to be in a "temporal dead zone" (TDZ) 
 * from the start of the block until code execution reaches the place 
 * where the variable is declared and initialized.
 * 
 * is time, since let vatibale hoisted and till intialize some value, from hoisting to initalize the value 
 */

// Temproal Dead Zone exanmple
{
    // TDZ starts at beginning of scope
    console.log(bar); // "undefined"
    console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
    var bar = 1;
    let foo = 2; // End of TDZ (for foo)
}
