const _ = require('lodash');

let obj = {
    a: '4234',
    b: null,
    c: undefined,
    d: false,
    e: {
        f: null,
        g: 80
    }
}

let res = _.omitBy(obj, _.isNil)
console.log(res)
// { a: '4234', d: false, e: { f: null, g: 80 } }