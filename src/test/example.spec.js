var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const fizzBuzz = require("../fizzBuzz");
/*
FizzBuzz problem: 
- za broj djeljiv sa 3 funkcija vraća "Fizz"
- za broj djeljiv sa 5 funkcija vraća "Buzz"
- Za broj djeljiv sa 3 i 5 funkcija vraća FizzBuzz
- Za ostale brojeve vratiti undefined
*/
describe.skip('fizz buz problem', function() {
    it('fizzBuzz should be a function', function () {
        fizzBuzz();
    });
    it('function should throw error if argument is not a number' ,
    function(){
        
        //fizzBuzz("1");
    });

    it('function should should accept number as an argument' ,
    function(){
        
        fizzBuzz("1");
    });

    it('should return Fizz if number is dividable by 3' ,
    function(){
        expect(fizzBuzz(3)).to.equal("Fizz");
    });
    it('should return Buzz if number is dividable by 5' ,
    function(){
        expect(fizzBuzz(5)).to.equal("Buzz");
    });

    it('should return FizzBuzz if number is dividable by 3 & 5' ,
    function(){
        expect(fizzBuzz(30)).to.equal("FizzBuzz");
    });

    it('if number is not dividable with 3 & 5 should return empty string' ,
    function(){
        expect(fizzBuzz(4)).to.equal("");
    });

    it('if number is dividable with 7 should return Suzz' ,
    function(){
        expect(fizzBuzz(7)).to.equal("Suzz");
    });

    it('if number is dividable with 3 & 7 should return FizzSuzz' ,
    function(){
        expect(fizzBuzz(21)).to.equal("FizzSuzz");
    });

    it('if number is dividable with 5 & 7 should return BuzzSuzz' ,
    function(){
        expect(fizzBuzz(35)).to.equal("BuzzSuzz");
    });
    it('if number is dividable with 3 & 5 & 7 should return FizzBuzzSuzz' ,
    function(){
        expect(fizzBuzz(105)).to.equal("FizzBuzzSuzz");
    });
});

//R-G-R