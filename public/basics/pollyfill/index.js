/* Pollyfill for Bind Method
   Our task is ot create own bind method 
*/
let name2  = {
    firstname : "Avinash",
    lastname : "Sharma"
}

let printname = function (hometown, state, country) {
    console.log(this.firstname + " " + this.lastname + " , " + hometown + " , " + state + " , " + country);
}

let printMyName = printname.bind(name2,"Bikaner");
printMyName("Rajasthan","India");

 Function.prototype.mybind = function(...args){

    let obj = this;
    params = args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params, ...args2]);
    }
}

let printMyName2 = printname.mybind(name2,"Bikaner"); 
printMyName2("Rajasthan","India");