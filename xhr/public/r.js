console = window.console;
document = window.document;

$.get("/")
 .done(function(data) {
   $("body").append("<br/>XHR prop result: "+data.prop);
 });
