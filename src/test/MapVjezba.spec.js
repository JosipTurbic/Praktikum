const chai = require('chai');
const { expect } = chai;
const {
    maps,
    animalLength,
    numbersUpgrader,
    numbersTripler,
    lowerCasewords,
    upperCasewords,
    wordsCloner,
    numberAdder,
    subtractByOne,
    animalLengthSubtracted
  } = require('../MapVjezba.js');
  


describe('Map exercise', function () {
    it('should return correct array' ,
    function(){
        expect(maps()).to.eql([4, 6, 8, 10, 70]);
    });
    it('should return correct letter length' ,
    function(){
        expect(animalLength()).to.eql([3, 3, 4]);
    });
    it('should return numbers upgraded by 1' ,
    function(){
        expect(numbersUpgrader()).to.eql([4, 6, 9, 18, 24]);
    });
    it('should return numbers tripled' ,
    function(){
        expect(numbersTripler()).to.eql([9, 15, 24, 51, 69]);
    });
    it('should return lowercased words' ,
    function(){
        expect(lowerCasewords(['AuTo', 'Je', 'POkvaren'])).to.eql(['auto', 'je', 'pokvaren']);
    });
    it('should return uppercased words' ,
    function(){
        expect(upperCasewords(['AuTo', 'Je', 'POkvaren'])).to.eql(['AUTO', 'JE', 'POKVAREN']);
    });
    it('should return cloned words' ,
    function(){
        expect(wordsCloner(['ja', 'ti'])).to.eql(['jaja', 'titi']);
    });

    it('should return 23 if number is 18' ,
    function(){
        expect(numberAdder([18])).to.eql([23]);
    });
    it('should return 22 if number is 23' ,
    function(){
        expect(subtractByOne([23])).to.eql([22]);
    });
    it('should return correct letter length  subtracted by 1' ,
    function(){
        expect(animalLengthSubtracted()).to.eql([2, 2, 3]);
    });

});