// calls a functions and return the error or result of the function
const _ = require('lodash');

const func = function () {
    let chance = _.sample([1, 0])
    if (chance === 1)
        throw "error"
    return chance
}

let res = _.attempt(func)
console.log(res) // can be either 1 or an error