const _ = require("lodash")

_.isArguments(function() { return arguments; }());
// => true
 
_.isArguments([1, 2, 3]);
// => false