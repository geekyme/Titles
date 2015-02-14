Titles.allow({
  insert: function(userId){
    return !!userId;
  }
});