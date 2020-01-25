// concats an array to another

const _ = require("lodash")
var array = [1, 324, 234];
var other = _.concat(array, 2, [3, 565], [[4, 452], [214, 45]]);

console.log(other)
// if an array is supplied, its values are concatinated
// [ 1, 324, 234, 2, 3, 565, [ 4, 452 ], [ 214, 45 ] ]
