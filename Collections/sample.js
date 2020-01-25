// returns random element from collection
const _ = require("lodash");

let array = [324, 45, '342', null, "df"]
let res = _.sample(array)
console.log(res)

// sampleSize(): returns n unique random numbers
