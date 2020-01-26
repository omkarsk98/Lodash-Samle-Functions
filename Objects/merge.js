// recursively merges to 2 objects with own and inherited keys
const _ = require('lodash');

var object = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
};

var other = {
    'a': [{ 'c': 3 }, { 'e': 5 }]
};

_.merge(object, other);
  // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }

// mergeWith(): accepts customizer