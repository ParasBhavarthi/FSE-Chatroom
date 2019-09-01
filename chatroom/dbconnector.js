/*var mysql = require('mysql');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'paras007',
	database : 'chatroom'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports = connection;
*/

var MySql = require('sync-mysql');

var connection = new MySql({
	host     : 'localhost',
	user     : 'root',
	password : 'paras007',
	database : 'chatroom'
});


module.exports = connection;