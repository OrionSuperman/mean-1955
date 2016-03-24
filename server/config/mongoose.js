// require mongoose
var mongoose = require('mongoose');
// require the FS module for loading model files
var fs = require('fs');
// require path for getting the models pathv
var path = require('path');
// connect to mongoose!
mongoose.connect('mongodb://localhost/1955');
// create a variable that points to the path where all of the models live
var models_path = path.join(__dirname, './../models');
// read all of teh files in the models_path and require (run) each of the JS files
fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js') >= 0){
    // require the file ( this runs the model file which registers the schema)
    require(models_path + '/' + file);
  }
});
