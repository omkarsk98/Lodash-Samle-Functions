const _ = require("lodash");

console.log(_.isBoolean(true)) // true
console.log(_.isBoolean("true")) // false

_.isBuffer(new Buffer(2));
// => true

_.isDate(new Date);
// => true

// check if it is a DOM element
// _.isElement(document.body);
// => true

// isEmpty(): works only on array, object, set and map
_.isEmpty(null) // true
_.isEmpty([]) // true
_.isEmpty([3]) // false

// _.isEqual(): deep check
// _.isEqualWith(): accepts customizer
// isError(): if its an error

_.isError(new Error) // true
_.isError(Error) //false

// _.isFinite(): checks if value is primitive finite number
// isFunction(): checks if it is function object
_.isFunction(_) // true

// isInteger(): checks if it is an integer
console.log(_.isInteger(3.4)) // false

// isLength(): checks if the value can be a valid length of an array

// isMap(): if is a map object

// isMatch(): checks if the two objects have matching property value
// isMatchWith(): accepts customizer

// isNan(): checks if it is Nan
// isNative(): checks if the value is a native function
_.isNative(Array.prototype.push);
// => true
_.isNative(_);
// => false

// isNil(): checks if it is null or undefined
_.isNil(null) // true
_.isNil(undefined) // true

// isNull(): checks if the value is null
_.isNull(null) //true

// isNumber():
// isObject():
// isObjectLike(): checks if its typeof in object
// isPlainObject(): checks if it is created using Object constructor

// isRegex(): checks if it is a regex expression
_.isRegExp(/abc/);
// => true
_.isRegExp('/abc/');
// => false

// isSet(), isString(), isSymbol(), isNumber()
// isWeakMap(), is weakSet()
