onmessage = function(oEvent) {
  var data = oEvent.data;
  var count = data.count || 0;
  if (count > 0) {
    var w = new Worker("test_iframe_sandbox_csp_worker.js");

    w.onmessage = function(oEvent2) {
      postMessage(oEvent2.data);
    };
    w.postMessage({count: count-1});
  } else {
    var req = new XMLHttpRequest();
    req.onload = function() {
      postMessage(this.responseText);
    };
    req.open("get", "http://b.lvh.me:3001/", false);
    req.send();
  }
}
