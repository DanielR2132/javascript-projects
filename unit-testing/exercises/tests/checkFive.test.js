const checkFive = require('../checkFive.js');
const test = require('../checkFive.js')

describe("checkFive", function (){

        test("should return 5 is equal to 5", function(){
            expect(test(5)).toBe("5 is equal to 5")

            test("should return 17 is greater than 5.", function(){
                expect (test(17)).toBe("17 is greater then 5")
            })
        });
}); 

module.exports = checkFive