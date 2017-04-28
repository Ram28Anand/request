var request = require('request');
var NodeCache = require('node-cache');
var http = require('http');
// var http = require('http');
// var request = http.createClient();

var myCache = new NodeCache({ stdTTL: 20, checkperiod: 30});

var server = http.createServer(function(req, res){
  var val = myCache.get("Hello");
  if (val === undefined){
      res.write('Not in cache \n');
      var options = {
          method: 'GET',
          url: 'https://api.enterprise.apigee.com/v1/o/himalaya/apis/Hello/revisions/',
          json: true,
          headers: {
              'Authorization': 'Basic cmFtMjhhbmFuZEBnbWFpbC5jb206QW5AbmRAMTIz'
          }
      };
      request(options, function(err, resp, body){
              options.url = options.url + body[body.length - 1];
              request(options, function(err, r, b){
                  console.log(b.proxies[0]);
                  res.write(b.proxies[0]);
                  myCache.set("Hello",b.proxies[0], 30);
              });
          });
    } else {
        res.write('from cache \n');
        res.write(val);
    }

    res.write('\nHello World!');
    res.end();
});




//console.log(data);
server.listen(8000);
console.log('server is listening!');
