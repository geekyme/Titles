Router.route('/', function () {
  this.render('home', {
    data: function () { 
      return {
        welcomeMessage: 'Welcome to Titles'
      }
    }
  });
});