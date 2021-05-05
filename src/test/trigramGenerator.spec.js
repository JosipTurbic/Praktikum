var assert = require('assert');
var chai = require("chai");
const trigramGenerator = require('../trigramGenerator');
var expect = chai.expect;
var should = chai.should;


describe('trigram generator problem', function() {
    it('trigramGenerator should be a function', function () {
        trigramGenerator("");
    });
    
    it('trigramGenerator treba biti text, ako ne baci error', function () {
        expect(() => trigramGenerator(1)).to.throw(Error);
    });


    it('Returns correct trigram for two word inpuut', function () {
        expect(trigramGenerator("I wish")).to.eql(new Map());
    });


    it('Returns correct trigram for 3 word input', function () {
        expect(trigramGenerator("I wish I")).to.eql(new Map([['I wish', ['I']]]));
    
    });

});
