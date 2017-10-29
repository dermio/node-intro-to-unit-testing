const chai = require("chai");
chai.should();

const fizzBuzzer = require("../fizzBuzzer");

describe("fizzBuzzer", function () {
  it("should return fizz-buzz when divisible by 15", function () {
    let normalCases = [15, 60, 120];
    normalCases.forEach(function (input) {
      let answer = fizzBuzzer(input);
      answer.should.equal("fizz-buzz");
    });
  });

});