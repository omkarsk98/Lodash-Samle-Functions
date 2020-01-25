// accepts comparator for diff
const _ = require("lodash");

let obj1 = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
let obj2 = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 1 }]

let objDiff = _.differenceWith(obj1, obj2, _.isEqual);
console.log(objDiff)

// [ { x: 2, y: 1 } ]
