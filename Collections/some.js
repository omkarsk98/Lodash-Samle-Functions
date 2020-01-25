// checks if predicate returns true for atleast one element of collection
const _ = require("lodash")

_.some([null, 0, 'yes', false], Boolean);
// => true

let users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false }
];
_.some(users, 'active');
// => true