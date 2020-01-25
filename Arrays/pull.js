// Removes all given values from array using SameValueZero for equality comparisons.
// Note: Unlike _.without, this method mutates array. Use _.remove to remove elements from an array by predicate.

// avoid as it mutates the data

const _ = require("lodash");
let array = ['a', 'b', 'c', 'a', 'b', 'c'];

_.pull(array, 'a', 'c'); // ['b','b']
// console.log(array);

// pullAll: removes all that are present in the supplied array
_.pull(array, ['a', 'c']); // ['b','b']
console.log(array)

// pullAllBy: accepts iteratee
// pullAllWith: accepts comparator
// pullAllAt: acceots array of indices to remove
// remove: remove elements by predicate

// without(): same ass pull, but returns new array
