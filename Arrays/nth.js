// nth: return element at nth index
// seems useless as native code is also readable
const _ = require("lodash");
let array = ['a', 'b', 'c', 'd'];
let res = _.nth(array, 2) // 'c'
console.log(res)