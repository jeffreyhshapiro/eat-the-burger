var express = require('express');
var app = express();
var handlebars = require('express-handlebars');
var router = require('./controllers/burger_controller.js');
var PORT = process.env.NODE_ENV || 8080;


app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', router);

app.listen(PORT, function(){
  console.log('app is listening on port %s', PORT);
})