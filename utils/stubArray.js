// returns an empty array
const _ = require('lodash');

let arrays = _.times(2, _.stubArray);

console.log(arrays);
// [[], []]

// stubFalse(): returns false
// stubTrue(): returns true
// stubObject(): returns new empty object
// stubString(): returns empty string
