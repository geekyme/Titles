Meteor.publish('title', function(id){
  return Titles.find(id);
});