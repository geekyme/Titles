(function () {

  'use strict';

  var assert = require('assert');

  module.exports = function () {

    var helper = this;

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

    this.Given(/^I fill the form field "([^"]*)" with "([^"]*)"$/, function(fieldName, fieldValue, callback){
      helper.world.browser.
        setValue('[name="'+fieldName+'"]', fieldValue).
        call(callback)
    })


    this.When(/^I navigate to "([^"]*)"$/, function (relativePath, callback) {
      helper.world.browser.
        // rootUrl includes a trailing slash, so relativePath should be in the form of "" not "/"
        url(helper.world.cucumber.mirror.rootUrl + relativePath).
        call(callback);
    });

    this.When(/^I submit the form$/, function(callback){
      helper.world.browser.
        submitForm('form').
        // just wait a little while cuz we are executing a meteor insert from autoform
        pause(2000).
        call(callback)
    })

    this.Then(/^I should see a heading "([^"]*)"$/, function (heading, callback) {

      helper.world.browser.
        getText('h1', function(err, text){
          assert.equal(text, heading);
          // you need to always add callback else the test is never going to pass
          callback();
        });
    });

    this.Then(/^I get redirected to route name "([^"]*)"$/, function (routeName, callback) {
      helper.world.browser.
        execute(function(){
          return Router.current().route.getName();
        }, function(err, ret){
          assert.equal(ret.value, routeName);
          callback();
        });
    });

    this.Then(/^I see a form error "([^"]*)"$/, function (errorMessage, callback) {
      helper.world.browser.
        getText('.help-block', function(err, text){
          assert.equal(text, errorMessage);
          callback();
        });
    });
  };

})();