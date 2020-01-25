// check if iteratee returns true for all the elements
const _ = require("lodash");
_.every([true, 1, null, 'yes'], Boolean);
// => false

var users = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred', 'age': "40", 'active': false }
];

let res = _.every(users, o => { return _.isNumber(o.age) }) // false
console.log(res);