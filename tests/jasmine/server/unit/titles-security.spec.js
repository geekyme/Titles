describe("Titles security rules", function() {
  var allow, deny;

  beforeEach(function(){
    allow = Titles._velocityAllow;
    deny = Titles._velocityDeny;
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

  it("should deny inserts when user is blacklisted", function() {
    // stub the Meteor.user() call in the deny insert function to simulate a blacklisted user
    spyOn(Meteor.users, 'findOne').and.returnValue({blacklisted: true});
    var response = deny.insert('1212adsa2131', {})
    expect(response).toBe(true);
  });

  it("should not deny inserts when user is not blacklisted", function() {
    // stub the Meteor.user() call in the deny insert function to simulate a non-blacklisted user
    spyOn(Meteor.users, 'findOne').and.returnValue({});
    var response = deny.insert('1212adsa2131', {})
    expect(response).toBe(false);
  });

});