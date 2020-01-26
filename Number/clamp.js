// bring at the border of lower or upper limit
// no change if number is within the range

const _ = require('lodash');

_.clamp(-10, -5, 5) // -5
console.log(_.clamp(0, -5, 5)) // 0


