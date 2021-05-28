const chai = require('chai');
const { expect } = chai;

describe('Reduce exercise', function () {

it('reduce test 1', function(){
    let sum = [1,2,3,4,5].reduce((prev, curr)=>prev + curr);
    expect(sum).to.eql(15);
});

it('reduce test 2', function(){
    let subtracter = [123, 3, 5].reduce((prev, curr) => prev - curr);
    expect(subtracter).to.eql(115);
});

it('reduce test 3', function(){
    let sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
        return accumulator + currentValue
      })
      expect(sum).to.eql(6);
});

it('reduce test 4', function(){
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    function(accumulator, currentValue) {
      return accumulator.concat(currentValue)
    })
    expect(flattened).to.eql([0, 1, 2, 3, 4, 5]);
});

it('reduce test 5', function(){
    let sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
        return accumulator + currentValue + 17
      })
      expect(sum).to.eql(57);
});

it('reduce test 6', function(){
    let sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
        return accumulator + currentValue -3
      })
      expect(sum).to.eql(-3);
});

it('reduce test 7', function(){
    let multiplier = [1,2,3].reduce((prev, curr) => prev * curr);
    expect(multiplier).to.eql(6);
});

it('reduce test 8', function(){
    let multiplier = [1,2,3,4].reduce((prev, curr) => prev * curr);
    expect(multiplier).to.eql(24);
});

it('reduce test 9', function(){
    let multiplierwithaddition = [1,2,3,4].reduce((prev, curr) => prev + (prev * curr));
    expect(multiplierwithaddition).to.eql(60);
});

it('reduce test 10', function(){
    let accumulationSubtracted = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
        return accumulator + currentValue -1
      })
      expect(accumulationSubtracted).to.eql(3);
});
});