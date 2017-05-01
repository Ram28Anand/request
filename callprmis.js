var prmis = require('./promise');

(function(){
  prmis.init().then(function(d){
    console.log(d);
    return d;
  });
})();
