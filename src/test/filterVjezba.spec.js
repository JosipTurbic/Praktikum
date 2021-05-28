const chai = require('chai');
const { expect } = chai;

describe('filter exercise', function () {

it('filter test 1', function(){
var ages = [32, 33, 16, 40];
function checkAdult(age) {
  return age >= 18;
}
function myFunction() {
  return ages.filter(checkAdult);
} 
expect(myFunction()).to.eql([32,33,40])
});

it('filter test 2', function(){
    let rijeci = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    const result= rijeci.filter(rijec => rijec.length > 6);
    expect(result).to.eql(['exuberant', 'destruction', 'present']);
    });

it('filter test 3', function(){
    function isBigEnough(value) {
        return value >= 10
          }
      let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
        expect(filtered).to.eql([12, 130, 44]);
    });

it('filter test 4', function(){
    let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']
    function filterItems(arr, query) {
      return arr.filter(function(el) {
          return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
      })
    }
     expect(filterItems(fruits,'ap')).to.eql(['apple', 'grapes']);
     });
    
it('filter test 5', function(){
    var heroes = [
        {name: 'Batman', franchise: 'DC'},
        {name: 'Ironman', franchise: 'Marvel'},
        {name: 'Thor', franchise: 'Marvel'},
        {name: 'Superman', franchise: 'DC'}
    ];
     var marvelHeroes =  heroes.filter(function(hero) {
        return hero.franchise == 'Marvel';
    });
            expect(marvelHeroes).to.eql(
                [ {name: 'Ironman', franchise: 'Marvel'}, {name: 'Thor', franchise: 'Marvel'} ]
                );
 });

it('filter test 6', function(){
    var numbers = [1, 3, 6, 8, 11];
    var lucky = numbers.filter(function(number) {
      return number > 7;
    });
   expect(lucky).to.eql([8,11]);
});

it('filter test 7', function(){
    function isPositive(value) {
        return value > 0;
    }
      var filtered = [112, 52, 0, -1, 944].filter(isPositive);
   expect(filtered).to.eql([112, 52,944]);
});

it('filter test 8', function(){
    function isEven(value) {
        return value % 2 == 0;
      }
      var filtered = [11, 98, 31, 23, 944].filter(isEven); 
   expect(filtered).to.eql([98, 944]);
});

it('filter test 9', function(){
    const names = ['John', 'Peter', 'James', 'Pammy'];
    const myName = names.filter(name => name.includes('am'));
   expect(myName).to.eql(['James', 'Pammy']);
});

it('filter test 10', function(){
    let imena = ['Josip', 'Aleksandra', 'Iva', 'Mara'];
    const dugaImena = imena.filter(ime => ime.length > 4);
   expect(dugaImena).to.eql(['Josip', 'Aleksandra']);
});



});