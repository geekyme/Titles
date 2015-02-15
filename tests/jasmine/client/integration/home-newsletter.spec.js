describe("subscribeStatus helper", function() {
  beforeEach(function(){
    Session.set('subscribeStatus', undefined);
  });

  afterEach(function(){
    Session.set('subscribeStatus', undefined);
  });

  it("should change when we update the session variable", function() {
    var oldValue = Template.home.__helpers.get('subscribeStatus')();
    var status = 'The supplied email address is not valid';
    Session.set('subscribeStatus', status);
    var newValue = Template.home.__helpers.get('subscribeStatus')();
    expect(oldValue).not.toEqual(newValue);
    expect(newValue).toEqual(status);
  });

  it("should not change when the session variable value is unchanged", function() {
    var oldValue = Template.home.__helpers.get('subscribeStatus')();
    Session.set('subscribeStatus', oldValue);
    var newValue = Template.home.__helpers.get('subscribeStatus')();
    expect(oldValue).toEqual(newValue);
  });
});