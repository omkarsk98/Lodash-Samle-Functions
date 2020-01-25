// creates a shallow clone of the data
const _ = require("lodash");

let obj = [{ 'a': 1 }, { 'b': { c: 2 } }]
let obj2 = _.clone(obj)
// obj2[1].b = 30;
console.log(obj, obj2)

// [ { a: 1 }, { b: 30 } ] [ { a: 1 }, { b: 30 } ]
// points to the same object

// cloneDeep(): deep clones the data
obj2 = _.cloneDeep(obj)
obj2[1].b = { c: 20 }
console.log(obj, obj2)

// cloneWith(): clone with a customiser
// cloneDeepWith(): deep clones with cutomiser