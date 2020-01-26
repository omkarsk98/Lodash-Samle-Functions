// convert to required case;
const _ = require('lodash');

_.kebabCase('Foo Bar');
// => 'foo-bar'

_.lowerCase('--Foo-Bar--');
// => 'foo bar'

_.lowerFirst('FRED');
// => 'fRED'

_.pad('abc', 8);
// => '  abc   '

_.padEnd('abc', 6);
// => 'abc   '

_.padStart('abc', 6);
// => '   abc'

_.parseInt('08');
// => 8

_.snakeCase('Foo Bar');
// => 'foo_bar'

_.toLower('--Foo-Bar--');
// => '--foo-bar--'

_.toLower('fooBar');
// => 'foobar'

_.toUpper('--foo-bar--');
// => '--FOO-BAR--'

_.toUpper('fooBar');
// => 'FOOBAR'

_.upperCase('--foo-bar');
// => 'FOO BAR'
 
_.upperCase('fooBar');
// => 'FOO BAR'
 
_.upperCase('__foo_bar__');
// => 'FOO BAR'

_.upperFirst('fred');
// => 'Fred'
 
_.upperFirst('FRED');
// => 'FRED'