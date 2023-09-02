

function aFn(){
    var a = 10;
    cFn();
    function cFn(){
        dFn();
        function dFn(){
            document.write("Output.... D = " + a);
            console.log("Output.... D = " + a);
        }
        
    }
}

aFn();


function PrintA(){
    console.log(answer);
    var answer = 1;
    
}

PrintA();
PrintA();

/*
Scope and shadowing concept

let b = 100;
{
    var a =10;
    let b = 20 ;
    const c = 30;
}
console.log(a);
console.log(b);
console.log(c);
*/

/*
Closures example 1
function x ()
{
    var a = 7;
    function y(){
        console.log(a);
    }
    y();
}
x();
*/

// Closure example
/* function x ()
{
    var a = 7;
    function y(){
        console.log(a);
    }
    return y;
}
var z = x();
// ....
z(); */


// Example for set time out with closure 1 
/* function x (){

    for(var i = 1; i<=5; i++){

        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
}

x(); */


// Example for set time out with closure 2 
/*  function x (){

    for(let i = 1; i<=5; i++){

        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
}

x();  */

// Example for set time out with closure 3 
/* function x (){

    for(var i = 1; i<=5; i++){

        function close(i){
            setTimeout(function(){
                console.log("output ..."+i);
            },i*1000);
        }
        close(i);
       
    }
}

x();  */

/* function attachListner(){

    let clickCount = 0;
    document.getElementById("clickButton").addEventListener("click", function xyz(){
        console.log("Button clicked ...",clickCount++);
    });
}
attachListner(); */



//document.write("Output.... GEC " + a);