var express = require('express');
var bodyParser = require('body-parser');

 var items = require('../database/index.js');


var app = express();

 app.use(express.static(__dirname + '/../client/dist'));


app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      console.log("get all items request performed")
      res.json(data);
    }
  });
});



app.listen(3000, function() {
  console.log('listening on port 3000!');
});
