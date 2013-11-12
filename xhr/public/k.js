console = window.console;

console.log("k.js!");

document.getElementById("from-sandbox").textContent += "w00t";

var count = 0;
var interval = window.setInterval(function() {
  console.log("k.js count..."+count);
  if (count++ >= 10) {
    try {
      window.clearInterval(interval);
    } catch(e) {
      console.log("k.js failed to clear interval: "+e);
    }
  }
},100);
