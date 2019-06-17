const express = require('express');
const app = express();
const server = require('http').Server(app);

const port = 8000;

app.use(express.static(__dirname + '/public', { extensions: ['html'] }));

server.listen(port, function() {

  console.log(`Server started on port ${port}`);

});
