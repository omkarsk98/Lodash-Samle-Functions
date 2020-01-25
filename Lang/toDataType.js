const _ = require("lodash");
// toArray()
_.toArray({ 'a': 1, 'b': 2 });
// => [1, 2]
_.toArray('abc');
// => ['a', 'b', 'c']
_.toArray(1);
// => []
_.toArray(null);
// => []

// toFinite()
_.toFinite(3.2);
// => 3.2
_.toFinite(Number.MIN_VALUE);
// => 5e-324
_.toFinite(Infinity);
// => 1.7976931348623157e+308
_.toFinite('3.2');
// => 3.2

// toInteger()
_.toInteger(3.2); // => 3
_.toInteger(Number.MIN_VALUE); // => 0
_.toInteger(Infinity); // => 1.7976931348623157e+308
_.toInteger('3.2'); // => 3

// _.toLength()
_.toLength(3.2);// => 3
_.toLength(Number.MIN_VALUE);// => 0
_.toLength(Infinity);// => 4294967295
_.toLength('3.2');// => 3

// toNumber()
_.toNumber(3.2);// => 3.2
_.toNumber(Number.MIN_VALUE);// => 5e-324
_.toNumber(Infinity);// => Infinity
_.toNumber('3.2');// => 3.2

// toSafeInteger()
_.toSafeInteger(3.2); // => 3
_.toSafeInteger(Number.MIN_VALUE); // => 0
_.toSafeInteger(Infinity); // => 9007199254740991
_.toSafeInteger('3.2'); // => 3

// toString()
_.toString(null); // => ''
_.toString(-0); // => '-0' 
_.toString([1, 2, 3]); // => '1,2,3'