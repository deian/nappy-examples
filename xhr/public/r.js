console = window.console;
document = window.document;
$ = window.$;

$.get("/")
 .done(function(data) {
   $("body").append("<br/>XHR prop result: "+data.prop);
 });
