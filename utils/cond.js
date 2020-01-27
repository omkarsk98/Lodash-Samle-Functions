// iterates over pairs and invokes the corresponding function of the first predicate to return truthy
const _ = require('lodash');

let func = _.cond([
    [_.matches({ 'a': 1 }), _.constant('matches A')],
    [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
    [_.stubTrue, _.constant('no match')]
]);

func({ 'a': 1, 'b': 2 });
// => 'matches A'

func({ 'a': 0, 'b': 1 });
// => 'matches B'

func({ 'a': '1', 'b': '2' });
// => 'no match'