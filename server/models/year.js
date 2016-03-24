// require mongoose
var mongoose = require('mongoose');
// create the schema
var YearSchema = new mongoose.Schema({
  name: String
})
// register the schema as a model
var Year = mongoose.model('Year', YearSchema);
