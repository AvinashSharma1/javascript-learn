/**
 * Immediately Invoked Function Expressions or IIFEs
 */

// Example 1
for(var j=1; j<=2;j++){
    console.log("Loop",j);
        
     (function (k) {   
        setTimeout( ()=> { 
            console.log("set time out j value is ",k)
        },5000);
     })(j);   
}
console.log(" j value is ",j);