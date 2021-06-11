const chai = require('chai');
const { expect } = chai;

describe.skip('forEach exercise', function () {

    it('forEach test 1', function(){
        var sum = 0;
        var numbers = [65, 44, 12, 4];
        numbers.forEach(myFunction);
        function myFunction(item) {
          return sum += item;
        } 
        expect(sum).to.eql(125);
    }); 

    it('forEach test 2', function(){
        var numbers = [65, 44, 12, 4];
        numbers.forEach(myFunction)
        function myFunction(item, index, arr) {
       return arr[index] = item * 10;
        } 
        expect(numbers).to.eql([650,440,120,40]);
    }); 

    it('forEach test 3', function(){
    var fruits = ["apple", "orange", "cherry"];
    fruits.forEach(myFunction);
    function myFunction(item) {
    return item ;
    }
expect(fruits).to.eql(["apple", "orange", "cherry"]);
    }); 

it('forEach test 4', function(){
    let students = ['John', 'Sara', 'Jack'];
    students.forEach(myFunction);
    function myFunction(item, index, arr) {
    arr[index] = 'Hello ' + item;
}
expect(students).to.eql(["Hello John", "Hello Sara", "Hello Jack"])
});

it('forEach test 5', function(){
    const arrayItems = ['item1', 'item2', 'item3'];
    const copyItems = [];
    arrayItems.forEach(function(item){
      copyItems.push(item);
    })
    
expect(copyItems).to.eql(['item1', 'item2', 'item3'])
});

it('forEach test 6', function(){
    const arrayItems = ['item1', 'item2', 'item3'];
    const copyItems = [];
    arrayItems.forEach(function(item){
      copyItems.push(item + " dodano");
    })
    
expect(copyItems).to.eql(['item1 dodano', 'item2 dodano', 'item3 dodano'])
});

it('forEach test 7', function(){
    const words = ['hello', 'bird', 'table', 'football', 'pipe', 'code'];
    words.forEach(capitalize);
    function capitalize(word, index, arr) {
    arr[index] = word[0].toUpperCase() + word.substring(1);
} 
expect(words).to.eql(['Hello', 'Bird', 'Table', 'Football', 'Pipe', 'Code'])
});

it('forEach test 8', function(){
    var brojevi = [1, 2, 3, 4];
    brojevi.forEach(myFunction)
    function myFunction(item, index, arr) {
   return arr[index] = item + 1;
    } 
    expect(brojevi).to.eql([2, 3, 4, 5]);
});

it('forEach test 9', function(){
    var fruits = ["apple", "orange", "cherry"];
    fruits.forEach(myFunction);
    function myFunction(item, index, arr) {
        arr[index] = item + item;
    }
expect(fruits).to.eql(["appleapple", "orangeorange", "cherrycherry"]);
});

it('forEach test 10', function(){
    let auti = ["crni", "crveni", "plavi"];
    auti.forEach(myFunction);
    function myFunction(item, index, arr) {
        arr[index] = item.includes('a') ;
    }
expect(auti).to.eql([false, false, true]);
});



});