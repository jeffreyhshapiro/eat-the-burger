var express = require('express');
var burgers = require('../models/burger.js');
var Router = require('router');
var router = express.Router();

router.get('/', function (req, res){
  burgers.allTheBurgers(function(data){
    res.render('index', {data});
  });
});

router.post('/cook', function (req, res){
  burgers.cookBurger(function(data){
    res.redirect('/');
  })
})

module.exports = router;
