Titles.allow({
  insert: function(userId, doc){
    return !!userId;
  }
});

Titles.deny({
  // blacklisted users cannot perform any inserts
  insert: function(userId, doc){
    // if blacklisted field is false / does not exist, then will return false
    // if blacklisted field is true, will return true and deny the insert
    return !!Meteor.users.findOne(userId).blacklisted;
  }
});