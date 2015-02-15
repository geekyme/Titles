// only need to wrap in onTest for jasmine integration tests
Jasmine.onTest(function () { 
  describe("Home Newsletter Sign Up", function() {
    beforeEach(function(){
      Subscriptions.remove({});
    });

    it("should not allow subscription for invalid email", function(done) {
      Meteor.call('subscribe', '123@', function(err, result){
        expect(err.error).toEqual('invalid-email');
        done();
      });
    });

    it("should allow subscription for valid email", function() {
      var result = Meteor.call('subscribe', 'hello123@gmail.com');
      expect(result).toBe(true);
    });

    it("should not allow subscription for valid email that has already been signed up", function(done) {
      
      // first subscription using email
      var result1 = Meteor.call('subscribe', 'hello123@gmail.com');
      expect(result1).toBe(true);

      // second subscription using same email should fail
      Meteor.call('subscribe', 'hello123@gmail.com', function(err, result){
        expect(err.error).toEqual('email-registered');
        done();
      });
    });

  });
});
