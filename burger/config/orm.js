var connection = require('./connection.js');

var orm = {
  getAllEntries: function(cb){
    var s = "SELECT * FROM burgers"
    connection.query(s, function(err, data){
      if (err) {throw err};
      cb(data);
    });
  },
  addBurger: function(cb){
    var s = "INSERT INTO burgers VALUES (?)"
    connection.query(s, cb, function(err, data){
      if (err) {throw err};
      console.log(cb)
      cb(data);
    })
  },
};

module.exports = orm;