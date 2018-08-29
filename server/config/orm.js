var connection = require('./connection.js');

findOne: function(burgerId, callback){
    'Select * from Burgers_DB where burger =' burgerId;
    callback(burgerdata);
}  