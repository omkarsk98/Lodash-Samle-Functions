// Creates a function that invokes func with the arguments of the created function
const _ = require('lodash');

let users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
];

let res = _.map(users, _.iteratee('user'));
console.log(res)
// [ 'barney', 'fred' ]