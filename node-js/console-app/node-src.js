// modules are like libraries in JS
// require(func) to include module name 

var 
  http = require('http');
  port = 8080;
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Server INIT!');
  }).listen(port);

console.log(`Base server is running at http://localhost:${port}`);

//  creating modules & exporting
// exports. instead of exporting

exports.myDateTime = () => {
    return Date();
}

// can 'import' like so:
// var dt = require('./node-notes.js'); IN 'server/webhello.js'

// node file requrests, querying an html file into server

//require file system  module
var fs = require('fs');
const html_port = 3000;
http.createServer((res, req) => {
  fs.readFile('../../html/index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(html_port);

console.log(`HTML server is running at http://localhost:${html_port}`);
