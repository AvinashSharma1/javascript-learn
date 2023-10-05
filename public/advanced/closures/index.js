/**
 * Closures 
 * Uses of Closures:
 *  1) Module design pattern
 *  2) Currying
 *  3) Function Like once
 *  4) Memoize
 *  5) Maintaing state in async world
 *  6) SetTimeouts
 *  7) Iterators
 *  8) and many more.... 
 * 
 */

// Example 1
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    a = 100;
    return y;
}
var output = x();
output();

// Example 2
function p()
{
    var b = 100;
    function q() {
        var a = 7;
        function r(){
            console.log(a,b);
        }
        r();
    }
    q();
}
p();

// Example 3

function countFunction(){
    let callCount = 0;
    return function (){
        console.log("Function call count is ", ++callCount);
    }
}

const countFunctionCall = countFunction();
countFunctionCall();
countFunctionCall();
countFunctionCall();
countFunctionCall();
countFunctionCall();

