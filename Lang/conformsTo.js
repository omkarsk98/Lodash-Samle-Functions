// check if the supplied path has the required condition
const _ = require("lodash");

let object = { 'a': 1, 'b': 2 };

_.conformsTo(object, { 'b': function (n) { return n > 1; } });
// => true

_.conformsTo(object, { 'b': function (n) { return n > 2; } });
// => false