/*
var connect = require('connect'),
    http = require('http');

connect()
  .use(connect.static('public-bar-foo'))
  .listen(3000);
*/

var express = require('express'),
    app = express();


app.configure(function(){
    app.use(function(req, res, next) {
      console.log("req: "+req.url);
      // prevent requests to b.com
//      res.setHeader("Content-Security-Policy", "script-src 'self';")
//      if(req.url == "/881509_iframe.html") {
//        console.log("setting csp!");
//        res.setHeader("Content-Security-Policy", "default-src 'self' 'unsafe-inline';");
//      }
      //res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'unsafe-inline'; sandbox 'allow-same-origin' 'allow-scripts'");
      //
      //res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self' 'unsafe-inline'; connect-src 'self'; img-src 'none'");
      //
      //
      //

      //res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self' 'unsafe-inline'; connect-src 'self'");

      /*
      if (req.url == "/test_iframe_sandbox_csp_worker_frame2.html") {
        console.log("setting csp header...");
        res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self' 'unsafe-inline'; connect-src 'self'");
      }
      else if (req.url == "/test_iframe_sandbox_csp_worker.js") {
        console.log("setting looser csp header...");
        res.setHeader("Content-Security-Policy", "default-src *; script-src 'self' 'unsafe-inline'; connect-src *");
      }
      */


      //res.setHeader("Access-Control-Allow-Origin", "*");
      return next();
    });
    app.use(express.static(__dirname+"/public", {maxAge:0}));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/', function(req, res) {
  console.log("req: "+req.url);
  res.json({ prop: 123, woot: 'w00t' });

});

//app.use(express.static(__dirname+'/public'));

app.listen(3000);
console.log("On port 3000");
