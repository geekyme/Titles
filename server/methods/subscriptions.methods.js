Meteor.methods({
  subscribe: function(email){
    // validate email 
    var pattern = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
    if(!pattern.test(email)) throw new Meteor.Error('invalid-email', 'The supplied email address is not valid');
    // check if email already registered
    if(Subscriptions.find({email: email}).count() > 0){
      throw new Meteor.Error('email-registered', 'The supplied email address has already been registered');
    }else{
      Subscriptions.insert({email: email});
    }

    return true;
  }
})