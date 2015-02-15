Titles = new Mongo.Collection('titles');

var schema = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    min: 5
  }
});

Titles.attachSchema(schema);