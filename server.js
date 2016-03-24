console.log('server.js')
// requiring express and path
var express = require("express");
var path = require("path");

// create the express application
var app = express();

// require bodyParser since we need to handle post DATABSE
var bodyParser = require("body-parser");
app.use(bodyParser.json());

// static content
app.use(express.static(path.join(__dirname, './client')));

// require the mongoose config file which does the rest for us
require('./server/config/mongoose.js');

// store the function in a variable
var routes_setter = require('./server/config/routes.js');

// invoke the function stored in routes_setter and pass it the app variable
routes_setter(app);

// tell the express app to listen on port 8000
app.listen(8000, function(){
  console.log("Listening on port 8000");
})
