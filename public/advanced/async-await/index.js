/**
 * Promise
 */

const cart = ["shoes","pants"];
const p1 = new Promise( function(resolve,reject){
    setTimeout(function(){
        resolve("Promise resolved value");
    },10000);    
});

async function handlePromise(){

    console.log("Hello world");
    const val = await p1;
    console.log(val);

    
}

handlePromise();