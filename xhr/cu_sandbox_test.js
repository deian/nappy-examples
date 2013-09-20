
var Ci = Ci || Components.interfaces;
var Cc = Cc || Components.classes;
var Cu = Cu || Components.utils;

//
// Principals
//

this.makeURI = function(aURL, aOriginCharSet, aBaseURI) {
  let ioService = Cc["@mozilla.org/network/io-service;1"]
                    .getService(Ci.nsIIOService); 
  return ioService.newURI(aURL, aOriginCharSet, aBaseURI);
};

this.makePrincipal = function(aURL) {
  if(aURL) {
    return Cc["@mozilla.org/scriptsecuritymanager;1"]
             .getService(Ci.nsIScriptSecurityManager)
             .getNoAppCodebasePrincipal(makeURI(aURL,"UTF-8")); 
  } else {
    return Cc["@mozilla.org/nullprincipal;1"]
             .createInstance(Ci.nsIPrincipal); 
  }
};

this.principalToString = function(p) {
  return p.origin;
}

var s = new Cu.Sandbox(["http://a.lvh.me:3000","http://a.lvh.me:3001"], {wantXHRConstructor: true});
Cu.evalInSandbox(' var response = "no-response"; function reqListener () { response = this.responseText; }; var oReq = new XMLHttpRequest(); oReq.onload = reqListener; oReq.open("get", "http://a.lvh.me:3000", true); oReq.send();'
    /*
    var response = "no-response";
    function reqListener () {
        response = this.responseText;
    };
     
    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open("get", "http://a.lvh.me:3000", true);
    oReq.send();
    */

    ,s);
