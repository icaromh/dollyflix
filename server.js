var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log('Our app is running on http://localhost:' + port);
});
