/**
 * Block
 * Scope - Global, Script, Block
 * Shadowing
 */

// Block 
/* {
    var a = 10;
    let b = 100;
    const c =1000;
    console.log(a); //10
    console.log(b); // 100
    console.log(c); // 1000
}

console.log(a); // 10
console.log(b); // ReferenceError: b is not defined (stop further execution)
console.log(c); */


// Shadowing

/* var p = 100;
let q = 1000;
let r = 10000;
{
    var p = 10;
    let q = 20;
    let r = 30;
    console.log(p); //10
    console.log(q); //20
    console.log(r); //30
}

console.log(p); // 10
console.log(q); // 1000
console.log(r); // 10000
 */

// Illegal shadowing
/* let  a = 10;
{
    var a = 100;
} */