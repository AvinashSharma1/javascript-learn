/**
 * Lexical Environment or Scope chain
 */

function x(){
    console.trace();
    console.log();
    
    console.log(" funcation name is :" + arguments.callee.name + " variable b  is "+ b);
    var b = 20;
    y();
    function y(){
        console.log(" funcation name is :" + arguments.callee.name + " variable b  is "+ b);
    }
}
//var b = 10;
x();
console.log(" variable b  is "+ b);