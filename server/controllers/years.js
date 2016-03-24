var mongoose = require('mongoose');
var Year = mongoose.model('Year');
module.exports = {
  index: function(req, res){
    Year.find({}, function(err, results){
      res.json(results);
    })
  },
  create: function(req, res){
    var person = new Year({name: req.params.name});
    person.save(function(err, data){
      if(err){console.log(err);}
      else{
        res.redirect('/')
      }
    })
  },
  show: function(req, res){
    Year.findOne({name: req.params.name}, function(err, data){
      if(err){console.log(err);}
      else{
        res.json({person: data});
      }
    })
  },
  delete: function(req, res){
    Year.remove({name: req.params.name}, function(err, data){
      res.redirect('/');
    })
  }
}
