const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cowlist'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

const retrieveData = (callback) => {
  connection.query('SELECT * FROM cows', (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  })
}

const sendData = (data, callback) => {
  connection.query(`INSERT INTO cows(name_, description_) VALUES ('${data.name}', '${data.description}')`, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  })
}

module.exports.connection = connection;
module.exports.retrieveData = retrieveData;
module.exports.sendData = sendData;
