var express = require('express');
var app = express();
var port = 3000;

app.use(express.static(__dirname + '/src'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});