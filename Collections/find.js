// returns first element where predicate returns true
const _ = require("lodash")

let users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
];

let res = _.find(users, 'active') // { user: 'barney', age: 36, active: true }
console.log(res)

// findLast(): last element where predicate returns false