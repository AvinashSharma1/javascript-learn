/**
 * Prototype
 */

let object1 = {
  name : "Avinash",
  city : "Bikaner",
  getIntro : function() {
    console.log(`${this.name} from ${this.city}`);
  }
}

let object2 = {
  name : "Avinash Sharma"
}

// Method 1 
object2.__proto__ = object1;

// Method2

let object3 = {
  city:"Jaipur"
}
/**
 * setPrototypeOf thorugh we can set object
 * now object2 also accesing city property
 */
Object.setPrototypeOf(object2,object3);

let object4 = {
  state : "Rajasthan"
}

/**
 * Now Function protype avilable this mybind with all function
 * myFunc.mybind it will return a function ƒ (){console.log("My bind is calling...");}
 * 
 */
Function.prototype.mybind = function(){
  console.log("My bind is calling...");
}

function myFunc(){

}
