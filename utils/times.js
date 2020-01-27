// invokes iteratee n times(), returns an array
const _ = require('lodash');

console.log(_.times(2, _.stubString))
// [ '', '' ]
console.log(_.times(2, () => { console.log("hey") }))
// hey
// hey
// [ undefined, undefined ]