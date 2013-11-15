var count = 0;

function main() {
//  window.console.log("bank_app2.js");

  try {
  var reqA = new XMLHttpRequest();

    reqA.onload = function() { 
//      window.console.log("w00t onload XHR");
        var d = document.createElement("div");
        d.appendChild(document.createTextNode("app: done!"));
        document.getElementById("log").appendChild(d);
        done({msg : "xhr"});
    };
    reqA.open("get", "http://bank.lvh.me:3000/this_is_ok", true);
    reqA.responseType = "json";
    reqA.send();
  } catch(e) { 
//    window.console.log("bank failed to XHR"); 
    done({msg : "xhr"});
  }
}

main();
