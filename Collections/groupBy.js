const _ = require('lodash')

let vehicles = [
    { name: "audi", type: "car" },
    { name: "audi", type: "bus" },
    { name: "audi", type: "truck" },
    { name: "ferrari", type: "car" },
    { name: "bmw", type: "car" },
    { name: "ferrari", type: "van" },
    { name: "audi", type: "van" },
    { name: "bmw", type: "van" }
]

let byName = _.groupBy(vehicles, 'name')
let res = _.forEach(byName, function (value, key) {
    byName[key] = _.groupBy(value, function (i) { return i.type })
})
console.log(res)
// multi level grouping