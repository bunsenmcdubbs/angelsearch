var express = require('express');
var app = express();

app.use('/', express.static('public/views'));
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send("hi");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
