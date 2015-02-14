(function () {

  'use strict';

  var assert = require('assert');

  module.exports = function () {

    var helper = this;

    this.Given(/^I am unauthenticated$/, function (callback) {
      helper.world.browser.
        // dont really need to do anything here, you should not be logged in when you open a new sesion 
        call(callback)
    });

    // anything placed in "" inside the Scenarios will be available as a argument
    this.When(/^I navigate to "([^"]*)"$/, function (relativePath, callback) {
      helper.world.browser.
        // rootUrl includes a trailing slash, so relativePath should be in the form of "" not "/"
        url(helper.world.cucumber.mirror.rootUrl + relativePath).
        call(callback);
    });

    this.Then(/^I should see a heading "([^"]*)"$/, function (heading, callback) {

      helper.world.browser.
        getText('h1', function(err, text){
          assert.equal(text, heading);
          // you need to always add callback else the test is never going to pass
          callback();
        });
    });

  };

})();