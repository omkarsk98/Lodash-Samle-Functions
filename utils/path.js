// converts value to property path array
const _ = require('lodash');

_.toPath('a.b.c');
// ['a', 'b', 'c']

_.toPath('a[0].b.c');
// ['a', '0', 'b', 'c']