// Currying

/*
Currying in JavaScript transforms a function with multiple arguments into a nested series of functions,
each taking a single argument. Currying helps you avoid passing the same variable multiple times, 
and it helps you create a higher order function
*/

// Currying By Bind Method 
let multiply = function(x,y){
    console.log("Bind X = ", x + " and Y = " + y);
    console.log("Bind Output = " +  x * y);
}

let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this,3);
multiplyByThree(5);



// Currying By Closure Method
let multiply2 = function(p)
{
    return function (q){
        console.log("Closure P = ", p + " and Q = " + q);
        console.log( "Closure Output = " + p * q);
    }
}

let multiplyBy2 = multiply2(2);
multiplyBy2(10);


let multiplyBy3 = multiply2(3);
multiplyBy3(10);

