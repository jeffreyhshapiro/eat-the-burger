var orm = require('../config/orm.js');

var burgers = {
  allTheBurgers : function(cb){
    orm.getAllEntries(function(res){
      cb(res);
    });
  },
  cookBurger : function(cb){
    orm.addBurger(function(res){
      cb(res);
    });
  },
};

module.exports = burgers;