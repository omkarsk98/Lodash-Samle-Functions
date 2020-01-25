// checks if value is included in the collection
const _ = require("lodash")
let data = [32, 45, 3, null, 34, 43]
let res = _.includes(data, null)
// true