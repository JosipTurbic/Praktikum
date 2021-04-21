var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const dayOfYear = require("../dayOfYear");


describe.skip(' problem', function() {
    
    it('function should throw error if argument is not a number' ,
    function(){
        
        dayOfYear("1");
    });
    it('should return 1 if its 1. of january 2000.',
    function(){
        expect(dayOfYear(2000,1,1)).to.equal(1);
    });
    it('should return 32 if its 1. of february 2000.',
    function(){
        expect(dayOfYear(2000,2,1)).to.equal(32);
    });
    it('should return 61 if its 1. of march 2000.',
    function(){
        expect(dayOfYear(2000,3,1)).to.equal(61);
    });

    it('should return 60 if its 1. of march 2001.',
    function(){
        expect(dayOfYear(2001,3,1)).to.equal(60);
    });

    it('should return 60 if its 1. of march 1900.',
    function(){
        expect(dayOfYear(1900,3,1)).to.equal(60);
    });

    it('should return 92 if its 1. of april 2000.',
    function(){
        expect(dayOfYear(2000,4,1)).to.equal(92);
    });
    it('should return 136 if its 15. of may 2000.',
    function(){
        expect(dayOfYear(2000,5,15)).to.equal(136);
    });
   
});
   