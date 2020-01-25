// Creates an object composed of keys generated from the results of running each element of collection thru iteratee. 
// The corresponding value of each key is the last element responsible for generating the key. The iteratee is invoked with one argument: (value).
const _ = require("lodash");
let array = [
    { 'dir': 'left', 'code': 97 },
    { 'dir': 'left', 'code': 7 },
    { 'dir': 'right', 'code': 100 }
];
let res = _.keyBy(array, "dir")
// replaces the data instead of creating an array of it
console.log(res)