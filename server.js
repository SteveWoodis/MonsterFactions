/* global __dirname, process */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Customer = require('./server/Customer/Customer.controller');
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3000));
app.use('/',express.static(__dirname + '/dist'));
app.use('/customer', Customer);


app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port') + '!');
});
