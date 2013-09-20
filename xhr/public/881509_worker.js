function doit() {
  postMessage("worker");
  try {
  var reqA = new XMLHttpRequest();
  
  reqA.onload = function() { };
  reqA.open("get", "/worker", true);
  reqA.send();
  } catch(e) { }
  try {
  var reqA = new XMLHttpRequest();
  
  reqA.onload = function() { };
  reqA.open("get", "http://evil.lvh.me:3001/worker", true);
  reqA.send();
  } catch(e) { }
}

onmessage = function(event) {
    //clearInterval(interval);
    postMessage("inworker: "+event.origin+":"+event.data);
    doit();
}

interval = setInterval(doit, 1000);
