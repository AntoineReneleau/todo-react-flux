var express = require('express');
var serveStatic = require('serve-static');

var app = express();

app.use(serveStatic('/src', {'index': ['index.htm']}));

var server = app.listen(80, '0.0.0.0', function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Demo server listening at http://%s:%s', host, port);
});
