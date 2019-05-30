var http = require('http');
var url = require('url');
var static = require('node-static');
var file = new static.Server('.', {
  cache: 0
});

function accept(req, res) {

  if (req.url == '/phones.json') {
    // искусственная задержка
    setTimeout(function() {
      file.serve(req, res);
    }, 200);
  } else {
    file.serve(req, res);
  }
}
  
  // ------ запустить сервер -------
  
  if (!module.parent) {
    http.createServer(accept).listen(8081);
    console.log('Running')
    ;
  } else {
    exports.accept = accept;
  }