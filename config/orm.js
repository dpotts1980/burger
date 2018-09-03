var connection = require("../config/connection.js");


//this will create question marks when we write our queries//
/* function createQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }//end of createQuestionMarks
 */
  //here is where we create our function to convert object(key/value) to sql//
  function objectToSql(obj) {
    var arr = [];

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        arr.push(key + '=' + obj[key]);
      }

      return arr.toString();
  }
}//end of objectToSql

  //object for all our sql statement functions

  var orm = {
    selectAll: function(table, cb) {
      var queryString = 'SELECT * FROM ' + table + ';';
      connection.query(queryString, function(err, result){
        if (err) throw err;
        cb(result);
      })
    }, //end of selectAll

    insertOne: function (table, burger_name, cb) {
      var queryString = "INSERT INTO " + table + " (burger_name) VALUES ('" + burger_name + "')";
      console.log(queryString);
      connection.query(queryString, function (err, result) {
        if (err) throw err;
        cb(result);
      });
    },//end of insertOne

    updateOne: function (table, objColVals, condition, cb) {
      var queryString = 'UPDATE ' + table;
  
      queryString = queryString + ' SET ';
      queryString = queryString + objToSql(objColVals);
      queryString = queryString + ' WHERE ';
      queryString = queryString + condition;
      console.log(condition);
  
      // console.log(queryString);
      connection.query(queryString, function (err, result) {
        if (err) throw err;
        cb(result);
      });
    },//end of updateOne
  };//end of orm

  module.exports = orm;