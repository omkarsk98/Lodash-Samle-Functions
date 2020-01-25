// returns array of elements where predicte returns true
// can also be used to filter array of objects where object has a specific key
const _ = require("lodash");

let users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': true },
    { 'user': 'fredy', 'age': 20 }
];

let res = _.filter(users, 'active')
// [ { user: 'barney', age: 36, active: true },
//   { user: 'fred', age: 40, active: true } ]

console.log(res)

// reject(): opposite of filter