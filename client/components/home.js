Template.home.events({
  'submit .js-subscribe': function (e) {
    e.preventDefault();
    var $form = $(e.target);
    var value = $form.find('.js-email').val();
    Meteor.call('subscribe', value, function(err, result){
      if(err){
        Session.set('subscribeStatus', err.reason);
      }else{
        Session.set('subscribeStatus', 'Successfully subscribed');
        $form[0].reset();
      }
    });
  }
});

Template.home.helpers({
  subscribeStatus: function () {
    return Session.get('subscribeStatus');
  }
});