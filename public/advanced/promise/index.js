/**
 * Promise
 */

const cart = ["shoes","pants"];

/* const promise = createOrder(cart); // order id
console.log(promise);

promise.then(function(orderId){
    console.log(orderId);
    //proceedToPayment(orderId);
})
.catch(function(err){
    console.log(err.message);
});
 */

/* createOrder(cart)
    .then( function(orderId){
        console.log("Order Id - ",orderId);
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
    })
    .catch(function(err){
        console.log(err.message);
    });
 */
/* createOrder(cart)
    .then(function(orderId){
        console.log(orderId);
        return orderId;
    })
    .then( function(orderId){
        return proceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
    })
    .catch(function(err){
        console.log(err.message);
    }); */

    createOrder(cart)
    .then(function(orderId){
        console.log(orderId);
        return orderId;
    })
    .catch(function(err){
        console.log(err.message);
    })
    .then( function(orderId){
        return proceedToPayment(orderId);
    })
    .catch(function(err){
        console.log(err.message);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
    })
    .then(function(){
        console.log("I'm still calling...");
    })
    .catch(function(err){
        console.log(err.message);
    });

function validateCart(cart){
    // true for validate cart 
    // fase for not valid cart
    return false;
}

// producer part of promise
function createOrder(cart) {

    const pr = new Promise(function(myresolve,myreject){

        // validate cart
        // order id
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid.");
            //reject(err);
            myreject(err);
        }
        const orderId = 12345;
        if(orderId){
            //resolve(orderId);
            setTimeout(function(){
                myresolve(orderId);
            },5000);            
        }
    });
    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){

        if(orderId == 12345){
            resolve("Payment successfully done.");
        }
        else {
            reject(new Error("Pyament has been not done."));
        }
    });
}