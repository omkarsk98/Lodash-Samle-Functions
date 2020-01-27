// executes the chained sequence and returns result;
const _ = require('lodash');

let array = [1, 2];
let wrapped = _(array).push(3);

console.log(array);
// => [1, 2]

wrapped = wrapped.commit();
console.log(array, wrapped);
// => [1, 2, 3]
// returns lodash wrapper

wrapped.last();
// => 3

console.log(array);
// => [1, 2, 3]