/**
 * Debouncing
 */

// Debouncing in Javascript
let counter = 0;
const getData = (...nameArgs) => {
  // calls an API and gets Data
  console.log("Fetching Data ..", nameArgs,counter++);
}

const debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this,
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context,arguments);
    }, d);
  }
}

const betterFunction = debounce(getData, 300);