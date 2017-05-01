const request = require('request');
var base_path = "http://localhost:8000";

describe("Test cases\n", function(){
  describe("\tFirst case\n", function(){
    it("\tcheck response code is 200\n", function(){
      request(base_path, function(err, res, body){
        expect(res.statusCode).toBe(200);
      });
    });
    it("\tAuthlevel is 0100", function(){
      request(base_path, function(err, res, body){
        expect(body).toBe(0100);
      });
    });
  });
});
