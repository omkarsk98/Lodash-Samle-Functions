// wraps value so that a chain sequence can be unabled.
const _ = require('lodash');

let users = [
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred', 'age': 40 },
    { 'user': 'pebbles', 'age': 1 }
];

let youngest = _
    .chain(users)
    .sortBy('age')
    .map(function (o) {
        return o.user + ' is ' + o.age;
    })
    .head()
    .value();

console.log(youngest)
// => 'pebbles is 1'