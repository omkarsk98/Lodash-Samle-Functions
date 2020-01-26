// creates a function whick calls the supplied function after atleast n calls
const _ = require('lodash');

const func = function () {
    console.log('called')
}

let res = _.after(3, func)
// calls func once it is called nth or more time

res();
res();
console.log("should print after this");
res();

// before(): same as after but calls functions upto n