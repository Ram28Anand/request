var cl = require('../promise');

describe("Test case\n", function(){
  it("\tcall cl.call1", function(){
    cl.init().then(function(d){
      expect(d).toBe(true);
    });
  });
  // it("call cl.call1", function(){
  //   expect(cl()).toBe(true);
  // });
});
