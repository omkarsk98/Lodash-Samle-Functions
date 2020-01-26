// returns new object with the supplied keys omitted, accepts nested path also
const _ = require('lodash');

let object = { 'a': 1, 'b': '2', 'c': 3, d: { e: 12 } };

_.omit(object, ['a', 'c']);
// => { 'b': '2' }
let res = _.omit(object, 'd.e')
console.log(object)
// omitBy(): accepts iteratee of identity type