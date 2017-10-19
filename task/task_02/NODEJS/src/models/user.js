const mysql = require('mysql');

connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'dbtest'
});

let userModel = {};

userModel.getUsers = (callback)  =>{
	if (connection){
		connection.query(
			'SELECT * FROM people',
			(err, rows) => {
			if (err) {
				throw err;
			}else{
				callback(null,rows);
			}
		}
		)
	}
};

userModel.getbyID = (id,callback) =>{
	console.log(`SELECT * FROM people Where id = ${id}`);
	if (connection){
		connection.query(
			`SELECT * FROM people Where id = ${id}`,
			(err, rows) => {
			if (err) {
				throw err;	
			}else{
				callback(null,rows);
			}
		}
		)
	}
};

module.exports = userModel;