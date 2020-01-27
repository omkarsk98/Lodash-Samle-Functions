// same as tap but returns the value of interceptor
const _ = require('lodash');

let res = _('  acb  ')
    .chain()
    .trim()
    .thru(function (value) {
        return [value]; // return keyword required
    })
    .sort() // not called
    .value();

console.log(res)
