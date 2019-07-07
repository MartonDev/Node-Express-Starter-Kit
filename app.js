const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const config = require('./config.json');

app.use(express.static(__dirname + '/public', { extensions: ['html'] }));
app.use(session({

	secret: 'RANDOM(10 length)',
	resave: true,
	saveUninitialized: true

}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));

const connection = mysql.createConnection({

  host: 'localhost',
  user: config.mysql_username,
  password: config.mysql_password,
  database: config.mysql_db

});
connection.connect();

require('./res/routes/post.js')(app, connection);
require('./res/routes/get.js')(app, connection);

server.listen(config.port, function() {

  console.log(`Server started on port ${config.port}`);

});
