// Generates a unique ID. If prefix is given, the ID is appended to it.
const _ = require('lodash');

_.uniqueId('contact_');
// => 'contact_104'
 
_.uniqueId();
// => '105'