(function () {

  'use strict';

  var assert = require('assert');

  module.exports = function () {

    var helper = this;

    this.Given(/^I am a visitor$/, function (callback) {
      helper.world.browser.
        call(callback);
    });

    // anything placed in "" inside the Scenarios will be available as a argument
    this.When(/^I navigate to "([^"]*)"$/, function (relativePath, callback) {
      helper.world.browser.
        // dont use this, will break because webdriver can only access websites with absolute url - 
        // url(relativePath).
        url(helper.world.cucumber.mirror.rootUrl + relativePath).
        call(callback);
    });

    this.Then(/^I should see a heading of "([^"]*)"$/, function (heading, callback) {

      helper.world.browser.
        getText('h1', function(err, text){
          assert.equal(text, heading);
          // you need to always add callback else the test is never going to pass
          callback();
        });
    });

  };

})();