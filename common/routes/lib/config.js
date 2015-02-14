Router.configure({
  layoutTemplate: 'MainLayout'
});

Router.onBeforeAction(AccountsTemplates.ensureSignedIn, {
  only: ['create']
});