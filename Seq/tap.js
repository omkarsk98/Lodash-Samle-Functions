// tap and modify intemediate value
const _ = require('lodash');

let res = _([1, 2, 3])
    .tap(function (array) {
        // Mutate input array.
        array.pop();
    })
    .reverse()
    .value();

console.log(res)