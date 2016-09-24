/**
 * Vue Webpack SPA server
 */

var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './')));

app.listen(port, function () {
  console.info('Listening on port %s, Open up http://127.0.0.1:%s/ in your browser.', port, port);
});
