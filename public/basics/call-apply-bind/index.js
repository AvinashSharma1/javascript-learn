let name = {
    firstname:"Avinash",
    lastname:"Sharma",
}

let name2 = {
    firstname:"Rahul",
    lastname:"Sharma",
}

let name3 = {
    firstname:"Sachin",
    lastname:"Tendulkar",
}

let printFullName  = function(hometown,state){
    console.log(this.firstname +  " " + this.lastname + " from " + hometown + " " + state)
}

// Example of Normal function call

printFullName(name);


// Example of call 
printFullName.call(name,"Bikaner", "Rajasthan");

// Example of Apply
printFullName.apply(name2, ["Bikaneri", "Rajasthan"]);

// Example of Bind
let printMyName = printFullName.bind(name3,"Mumbai", "Maharastra");
console.log(printMyName);
printMyName();