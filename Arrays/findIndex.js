// find index of element that predicate returns true
const _ = require("lodash")

let users = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
];

let res = _.findIndex(users, function (e) { return e.active })
console.log(res)
// 2

array = [324, 2523, 23, "34", { a: 45 }]
res = _.findIndex(array, e => { return _.isString(e) })
console.log(res)
// 3

// findLastIndex: finds last index of element for which predicate returns true
res = _.findLastIndex(array, e => {
    return _.isNumber(e)
})
console.log(res)
// 2
