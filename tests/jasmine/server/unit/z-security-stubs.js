Mongo.Collection.prototype.allow = function(rules){
  this._velocityAllow = rules;
}

Mongo.Collection.prototype.deny = function(rules){
  this._velocityDeny = rules;
}