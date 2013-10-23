console = window.console;
document = window.document;

$("body").append('<img src="https://developer.mozilla.org/files/4523/multidevices.png">');

var count = 0;
var interval = window.setInterval(function() {
  if (count++ <  10) {
  $.get("http://a.lvh.me:3000/")
   .done(function(data) {
     $("body").append("<br/>XHR "+count+" prop result: "+data.prop);
   }).fail(function(data,stat,e) {
     $("body").append("<br/>XHR page error: "+e);
   });

  // or
  try {
  var reqA = new XMLHttpRequest();

    reqA.onload = function() { 
     $("body").append("<br/>Sbox XHR "+count+" prop result: "+this.response.prop);
    };
    reqA.open("get", "http://a.lvh.me:3000/", true);
    reqA.responseType = "json";
    reqA.send();
  } catch(e) { console.log("q.js failed to XHR"); }

  }
  else 
    window.clearInterval(interval);
},10);
