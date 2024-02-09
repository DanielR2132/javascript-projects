// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("should return oragnization as nonprofit", function(){
    expect(launchcode.organization).toBe("nonprofit")
  });
  test("should return as Jeff", function(){
    expect(launchcode.executiveDirector).toBe("Jeff")
    });
  test("should return 100%", function(){
    expect(launchcode.percentageCoolEmployees).toBe("100")
      });
  test("should return as [array]", function(){
    expect(launchcode.programsOffered).toBe["Web Dev", "Data Analysis", "Liftoff"];
});
});

module.exports = launchcode;

  // Write your unit tests here!


  