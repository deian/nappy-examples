//console.log("phone.js");
$(document).ready(function () {
      $('#log').html( $('#log').html().replace(/(\d?\d?\d-\d\d\d-\d\d\d\d)/g,'<a href="callto://#">$1</a>') );
});
done({msg : "ext"});
