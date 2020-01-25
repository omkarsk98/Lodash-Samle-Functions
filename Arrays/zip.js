// creates array of same indices
const _ = require("lodash");

let zipped = _.zip(['a', 'b', 'c'], [1, 2], [true, false, true]);

console.log(_.unzip(zipped))
// => [['a', 1, true], ['b', 2, false], [ undefined, undefined, true ]]

_.unzip(zipped);
// [ [ 'a', 'b', undefined ],
//   [ 1, 2, undefined ],
//   [ true, false, true ] ]

// zipObject(): return single object instead of array of arrays. NOTE: takes only two arrays
_.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]); // supports property paths
// => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }

// zipWith(): acceptsfunction to combine arrays
let res = _.zipWith([1, 2, 53, 3], [10, 20], [100, 200, 345], function (a, b, c) {
    return a + b + c;
});
// [ 111, 222, NaN, NaN ]