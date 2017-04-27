var request = require('request');
// var http = require('http');
// var request = http.createClient();

var proxy;

var options = {
    method: 'GET',
    url: 'https://api.enterprise.apigee.com/v1/o/himalaya/apis/Hello/revisions',
    json: true,
    headers: {
        'Authorization': 'Basic cmFtMjhhbmFuZEBnbWFpbC5jb206QW5AbmRAMTIz'
    }
};


var options2 = {
    method: 'GET',
    url: 'https://api.enterprise.apigee.com/v1/o/himalaya/apis/Hello',
    json: true,
    headers: {
        'Authorization': 'Basic cmFtMjhhbmFuZEBnbWFpbC5jb206QW5AbmRAMTIz'
    }
};

request(options, function(err, res, body){
        //console.log(res);
        //console.log(err);
        console.log(body);
        //proxy = body;
        //console.log(proxy);
        request();
    });

//console.log(data);
