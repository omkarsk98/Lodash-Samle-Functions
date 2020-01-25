// creates two array, 1st having predicate returning true and 2nd having predicate returning false
const _ = require("lodash");

let users = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred', 'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1, 'active': false }
];

let res = _.partition(users, 'active')
console.log(res)
// [ [ { user: 'fred', age: 40, active: true } ],
//   [ { user: 'barney', age: 36, active: false },
//     { user: 'pebbles', age: 1, active: false } ] ]