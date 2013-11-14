var count = 0;

function main() {
  window.console.log("bank_app.js");

  try {
  var reqA = new XMLHttpRequest();

    reqA.onload = function() { 
      window.console.log("w00t onload XHR");
    };
    reqA.open("get", "http://bank.lvh.me:3000/this_is_ok", true);
    reqA.responseType = "json";
    reqA.send();
  } catch(e) { window.console.log("bank failed to XHR"); }
}

var interval = window.setInterval(function() {
  if (count++ <  10)
    main();
  else 
    window.clearInterval(interval);
},1000);
