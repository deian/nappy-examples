console  = window.console;
document = window.document;

function main() {
  window.console.log("bank_app.js");
  done({msg : "privs="+Sandbox.privileges+"\nlabel="+Sandbox.getPrivacyLabel()});

  try {
  var reqA = new XMLHttpRequest();

    reqA.onload = function() { 
      console.log("w00t onload XHR");
    };
    reqA.open("get", "http://bank.lvh.me:3000/this_is_ok", true);
    reqA.open("get", "http://bank.lvh.me:3000/this_is_ok", true);
    reqA.responseType = "json";
    reqA.send();
  } catch(e) { console.log("bank failed to XHR"); }
}
