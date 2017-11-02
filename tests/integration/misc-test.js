/* global moment */
import Ember from "ember";
import startApp from '../helpers/start-app';
import { test, moduleForComponent } from 'ember-qunit';

var App, component;

moduleForComponent('date-picker', 'ember-cli-datepicker integration', {
  unit: true,
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
    // clear up component (this should be done by ember-qunit soon!)
    if (component) {
      Ember.run(component, 'destroy');
      component = null;
    }
  }
});

test("it shows the picker on input focus, then hides it after click outside", function(assert) {
  assert.expect(3);
  component = this.subject();

  // initial render
  this.$();

  assert.equal($('.pika-single').hasClass('is-hidden'), true, "date picker is initially hidden");

  click(this.$());
  andThen(function() {
    assert.equal($('.pika-single').hasClass('is-hidden'), false, "date picker is visible");
    click(document.body);
  });
  andThen(function() {
    assert.equal($('.pika-single').hasClass('is-hidden'), true, "date picker is hidden again");
  });
});
