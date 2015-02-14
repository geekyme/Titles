Router.map(function(){
  this.route('create', {
  });
  this.route('title', {
    path: '/title/:_id',
    waitOn: function(){
      return [
        Meteor.subscribe('title', this.params._id)
      ]
    },
    data: function(){
      return Titles.findOne(this.params._id)
    }
  });
})