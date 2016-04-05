var assert = require("assert");
var code = require("../public/script.js");

console.log(code.phrase);


describe('Code', function(){
  describe("groups array", function(){
    it("checks for floats", function(){
      assert.deepEqual(true, code.isFloat(3.14159))
      assert.deepEqual(false, code.isFloat(5))
    })
    it("groups strings into string aray", function(){
      assert.deepEqual(true, code.group(["how's",5,6.34,"it","going"]))
    })
  })
})
