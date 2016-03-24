var years = require('../controllers/years.js');
module.exports = function(app){
  // root route to render the index.ejs
  app.get('/', years.index);
  app.get('/new/:name', years.create);
  app.get('/remove/:name', years.delete);
  app.get('/:name', years.show);
  // app.post('/quotes', **controller**.create);
  // app.get('/main', **controller**.show);
}
