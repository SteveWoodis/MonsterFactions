/* global process */

import express from 'express';
import bodyParser from 'body-parser';
import Customer from './Customer/Customer.controller';
var app = express();
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3000));
app.use('/',express.static(__dirname + '/src'));
app.use('/api/customer', Customer);


app.listen(app.get('port'), () => {
  console.log('Example app listening on port ' + app.get('port') + '!');
});
