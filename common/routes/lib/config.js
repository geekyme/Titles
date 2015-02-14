Router.configure({
  layoutTemplate: 'MainLayout'
});

AccountsTemplates.configureRoute('ensureSignedIn', {
  template: 'restricted'
});

Router.onBeforeAction(AccountsTemplates.ensureSignedIn, {
  only: ['create']
});