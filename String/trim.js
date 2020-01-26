const _ = require('lodash');

_.trim('  abc  ');
// => 'abc'

_.trim('-_-abc-_-', '_-');
// => 'abc'

_.trimEnd('  abc  ');
// => '  abc'
 
_.trimEnd('-_-abc-_-', '_-');
// => '-_-abc'

_.trimStart('  abc  ');
// => 'abc  '
 
_.trimStart('-_-abc-_-', '_-');
// => 'abc-_-'