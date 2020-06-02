const mysql = require('mysql');

let connect = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Qdatasd123123',
	database: 'clone_instagram',
});

connect.connect((err) => {
	if(err) {
		console.log('Error connecting to db!!!');
	}
	console.log('Connection establish!!!');
});

module.exports = connect;