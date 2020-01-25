// check if two values are equal
const _ = require("lodash");

let x1 = 'abc';
let x2 = 'abc';
console.log(_.eq(x1, x2)) // true

console.log(_.eq(null, null)) // true

let obj1 = { a: 1 };
let obj2 = { a: 1 };
console.log(_.eq(obj1, obj2)) // false, pointing to different instances

// gt(): check if first value is greater than other
// gte(): check if first value is greater than or equal to other
// lt(): check if first value is less than the 2nd
// lte(): checks if the first value is less than or equal the second
