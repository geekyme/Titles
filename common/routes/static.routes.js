Router.route('/', function () {
  this.render('home', {
    data: function () { 
      return {
        welcomeMessage: 'Learn more about Titles'
      }
    }
  });
});