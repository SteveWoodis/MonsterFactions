var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('factiondb', ['customers']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/src'));
app.use(bodyParser.json());

/*app.get('/customers/:email', function (req, res) {
    console.log('Hello World I received a GET request!');
    db.factiondb.findOne({email:req.params.email},function(err, docs) {
      console.log(docs);

      res.send(JSON.stringify(docs));
    })
});
  
app.post('/factiondb', function(req, res){
  console.log(req.body);
  db.customers.insert(req.body, function(err,doc){
    res.json(doc);
  })
});
*/
app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port ' + port + '!');
});
var port = 3000;