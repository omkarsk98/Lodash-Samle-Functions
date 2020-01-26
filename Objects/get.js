// get(object, path, [defaultValue])
const _ = require('lodash');

let data = {
    a: 1,
    b: {
        c: 234,
        d: 66
    }
}

let res = _.get(data, 'c')
console.log(res) // undefined