// Creates a function that accepts arguments of func and either invokes func returning its result,
// if at least arity number of arguments have been provided,
// or returns a function that accepts the remaining func arguments, 
// and so on. The arity of func may be specified if func.length is not sufficient.
const _ = require('lodash');

var abc = function (a, b, c) {
    return [a, b, c];
};

var curried = _.curry(abc);

curried(1)(2)(3);
// => [1, 2, 3]

curried(1, 2)(3);
// => [1, 2, 3]

curried(1, 2, 3);
// => [1, 2, 3]

// curryRight(): supplies arguements from the right