describe("Titles security rules", function() {
  var allow;

  beforeEach(function(){
    allow = Titles._velocityAllow;
  });

  it("should allow inserts when user is logged in", function() {
    // when user is logged out, userId arg is the _id of a user doc
    var response = allow.insert('1212adsa2131', {});
    expect(response).toBe(true);
  });

  it("should not allow inserts when user is logged out", function() {
    // when user is logged out, userId arg is null
    var response = allow.insert(null, {});
    expect(response).toBe(false);
    
  });
});