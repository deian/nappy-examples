function log(msg) {
  var d = document.createElement("div");
  d.appendChild(document.createTextNode(msg));
  document.getElementById("log").appendChild(d);
  console.log(msg);
}
window.setInterval(function() {log("w00t"); }, 1000);
