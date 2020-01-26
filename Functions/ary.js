// creates function that calls func with upto n arguments and ignores all the other arguments
const _ = require('lodash');

let res = _.map(['6', '8', '10'], _.ary(parseInt, 1));
// => [6, 8, 10]