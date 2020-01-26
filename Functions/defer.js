// puts off calling the funciton until the current call stack has cleared
const _ = require('lodash')

_.defer(function (text) {
    console.log(text);
}, 'deferred');
// => Logs 'deferred' after one millisecond.