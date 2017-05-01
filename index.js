var request = require('request');
var NodeCache = require('node-cache');
var http = require('http');

var base_path = 'https://api.enterprise.apigee.com/v1/o/himalaya/apis/Hello/revisions/';
var myCache = new NodeCache({ stdTTL: 20, checkperiod: 30});

var server = http.createServer(function(req, res){
  var val = myCache.get("Hello");
  if (val === undefined){
      res.write('Not in cache \n');
      var options = {
          method: 'GET',
          url: base_path,
          json: true,
          headers: {
              'Authorization': 'Basic cmFtMjhhbmFuZEBnbWFpbC5jb206QW5AbmRAMTIz'
          }
      };
      request(options, function(err, resp, body){
              options.url = options.url + body[body.length - 1]+'/resources/jsc/auth.js';
              request(options, function(err, r, b){
                  console.log(b.authlevel);
                  myCache.set("Hello",b.authlevel, 30);
              });
          });
    } else {
        res.write(val);
        res.write('\nfrom cache \n');
    }

    res.write('\nHello World!');
    res.end();
});

server.listen(8000);
console.log('server is listening!');




//console.log(data);
server.listen(8000);
console.log('server is listening!');
