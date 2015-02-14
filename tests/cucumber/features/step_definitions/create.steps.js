(function () {

  'use strict';

  var assert = require('assert');

  module.exports = function () {

    var helper = this;

    /* UNAUTHENTICATED PATH */
    this.Given(/^I am unauthenticated$/, function (callback) {
      helper.world.browser.
        url(helper.world.cucumber.mirror.rootUrl).
        executeAsync(function(done){
          Meteor.logout(function(err){
            done(err);
          });
        }, function(err, ret){
          callback();
        });
    });

    /* AUTHENTICATED PATH */

    this.Given(/^I am authenticated$/, function (callback) {
      helper.world.browser.
        // open new browser and login
        url(helper.world.cucumber.mirror.rootUrl). 
        executeAsync(function(done){
          Meteor.loginWithPassword('helloworld@gmail.com', 'helloworld1', function(err){
            done(err);
          });
        }, function(err, ret){
          callback();
        })
    });

    /* COMMON PATH */
    
    // this is used by the 2 execution paths - auth and unauth
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