//importing orm.js into burger.js
var orm = require('../config/orm.js');

var burger = {
	all: function (cb) {
		orm.selectAll('burgers', function (res) {
			cb(res);
		});
	},
	create: function (col, burger_name, cb) {
		orm.insertOne('burgers', burger_name, function (res) {
			cb(res);
		});
	},
	update: function (objColVals, condition, cb) {
		orm.updateOne('burgers', objColumnVals, condition, function (res) {
			cb(res);
		});
	}
};

module.exports = burger;