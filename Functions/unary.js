// accepts only single arguement
const _ = require('lodash');

_.map(['6', '8', '10'], _.unary(parseInt));
// => [6, 8, 10]