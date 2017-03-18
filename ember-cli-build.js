/* eslint-env node */
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    vendorFiles: {
      'handlebars.js': null
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  app.import(app.bowerDirectory + '/moment/moment.js');
  app.import(app.bowerDirectory + '/pikaday/pikaday.js');
  app.import(app.bowerDirectory + '/pikaday/css/pikaday.css');

  return app.toTree();
};
