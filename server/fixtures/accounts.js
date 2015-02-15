Meteor.startup(function(){
  if(Meteor.users.find().count() == 0){  
    Accounts.createUser({
      email: 'helloworld@gmail.com',
      username: 'helloworld',
      password: 'helloworld1'
    });
  }
})