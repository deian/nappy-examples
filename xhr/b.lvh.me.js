/*
var connect = require('connect'),
    http = require('http');

connect()
  .use(connect.static('public-bar-foo'))
  .listen(3000);
*/

var express = require('express'),
    app = express();

app.get('/', function(req, res) {
  console.log("req: "+req.url);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({ prop: 456, woot: 'w00t' });

});

app.configure(function(){
    app.use(function(req, res, next) {
      console.log("req: "+req.url);
      return next();
    });
app.use(express.static(__dirname+"/public", {maxAge:0}));
});

app.listen(3001);
console.log("On port 3001");
