// binds method to the object
const _ = require('lodash');

let view = {
    'label': 'hello',
    'click': function () {
        console.log('clicked ' + this.label);
    }
};


view.click()
_.bindAll(view, ['click']);
view.click()
  // => Logs 'clicked docs' when clicked.