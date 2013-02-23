var http = require('http');
var port = process.env.PORT || 3000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/xml'});

  var twiML = "<Response>"
    		+	"<Say>Joining a conference room</Say>"
    		+	"<Dial>"
        	+ 		"<Conference>MyRoom</Conference>"
    		+	"</Dial>"
			+"</Response>";


  res.end(twiML);
}).listen(port);
console.log('Server running at http://127.0.0.1:' + port);

