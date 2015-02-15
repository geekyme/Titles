AutoForm.hooks({
  insertTitleForm: {
    onSuccess: function(operation, result, template) {
      Router.go('title', {_id: result})
    } 
  }
})