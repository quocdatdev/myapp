const mysql = require('mysql');

let connect = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
});

connect.connect((err) => {
	if(err) {
		console.log('Error connecting to db!!!');
	}
	console.log('Connection establish!!!');
});

module.exports = connect;
