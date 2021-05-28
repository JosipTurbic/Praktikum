function maps (){
    const sweetArray = [2, 3, 4, 5, 35]
    const sweeterArray = sweetArray.map(sweetItem => {
    return sweetItem * 2
})
return sweeterArray;
}

function animalLength(){
var animals = ["cat","dog","fish"];
var lengths = animals.map(function(animal) {
  return animal.length;
});
return lengths;
}

function numbersUpgrader(){
    var numbers = [3, 5, 8, 17, 23]
    return numbers.map(number => {
        return number + 1;
    });
   
    }

    function numbersTripler(){
    var numberArray = [3, 5, 8, 17, 23]
    return numberArray.map(oneNumber => {
        return oneNumber * 3;
    });
    }

    function lowerCasewords(words) {
         return words.map(word => word.toLowerCase());
    }

    function upperCasewords(words) {
        return words.map(word => word.toUpperCase());
   }

   function wordsCloner(words) {
    return words.map(word => word + word);
}

function numberAdder(numbers) {
    return numbers.map(num => num + 5);
}

function subtractByOne(numbers) {
    return numbers.map(num => num - 1);
}

function animalLengthSubtracted(){
    var animals = ["cat","dog","fish"];
    var lengths = animals.map(function(animal) {
      return animal.length -1;
    });
    return lengths;
    }

module.exports= {
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
};