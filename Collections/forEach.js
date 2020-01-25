// invokes predicate over all elements
const _ = require("lodash");
_.forEach({ 'a': 1, 'b': 2 }, function (value) {
    return console.log(value ** 2)
});

// forEachRight(): iterates right to left