var Promise = require('promise');

var call1 = function(a){
  return new Promise(function(resolve,reject){
    // console.log("Call 1: " + a);
    resolve(a);
  });
};

var call2 = function(a){
    // console.log("Call 2: " + a);
    return Promise.resolve(true);
    //return a == 10;
};

module.exports.init = function(){
  var a = 10;
  // return call2(a);
  return call1(a)
        .then(call2)
        .then(function(val){
          //console.log(val);
          return val;
        });
  // console.log("In init");
  // console.log(b);
  // return true;
};
