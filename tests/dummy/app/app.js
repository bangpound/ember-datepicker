import Ember from 'ember';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

if (parseFloat(Ember.VERSION) < 2.13) {
  Ember.MODEL_FACTORY_INJECTIONS = true;
}

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App);

export default App;
