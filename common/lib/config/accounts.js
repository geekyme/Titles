// customised ensureSignedIn
AccountsTemplates.configureRoute('ensureSignedIn', {
  template: 'restricted',
  layoutTemplate: 'mainLayout',
  // this is required to work with iron router
  path: '/login-to-see'
});