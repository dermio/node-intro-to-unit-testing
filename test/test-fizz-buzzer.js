const chai = require("chai");
chai.should();

const fizzBuzzer = require("../fizzBuzzer");

describe("fizzBuzzer", function () {
  // test for normal cases
  it("should return `fizz-buzz` when divisible by 15", function () {
    let normalCases = [15, 60, 120];
    normalCases.forEach(function (input) {
      let answer = fizzBuzzer(input);
      answer.should.equal("fizz-buzz");
    });
  });

  it("should return `buzz` when divisible by 5", function () {
    let normalCases = [10, 50, 100];
    normalCases.forEach(function (input) {
      let answer = fizzBuzzer(input);
      answer.should.equal("buzz");
    });
  });

  it("should return `fizz` when divisible by 3", function () {
    let normalCases = [6, 18, 36];
    normalCases.forEach(function (input) {
      let answer = fizzBuzzer(input);
      answer.should.equal("fizz");
    });
  });

  it("should return the number if not divisible by 3 or 5", function () {
    let normalCases = [8, 16, 32];
    normalCases.forEach(function (input) {
      let answer = fizzBuzzer(input);
      answer.should.equal(answer);
    });
  });

  // test for edge case, input is not a number
  it("throw an Error when argument is not a number", function () {
    let edgeCases = ["hello", false, [], {}];
    edgeCases.forEach(function (input) {
      (function () {
        fizzBuzzer(input);
      }).should.throw(Error);
    });
    /* Why is the fizzBuzzer function called inside an anonymous function?
    Why do the following examples fail?:
    1. fizzBuzzer(input).should.throw(Error)
    2. fizzBuzzer(input).should.equal(Error)
    */
  });

});