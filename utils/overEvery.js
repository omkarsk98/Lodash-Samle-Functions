// checks if all the predicates return true
const _ = require('lodash');

let func = _.overEvery([Boolean, isFinite]);

func('1');
// true

func(null);
// false

func(NaN);
// false

// overSome(): checks if atleast one predicate returns true