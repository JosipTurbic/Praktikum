//R-G-R
//napraviti prosirenje da za brojeve djeljive sa 7 
//program vraca "Suzz"
//za rojeve djeljive sa 5 i 7 vraca BuzzSuzz
//za brojeve djeljive sa 3 i 7 vraca Fizz Suzz
function fizzBuzz(num){
    //throw Error();
    let result="";
    if(!(num%3)) result += "Fizz";
    if(!(num%5)) result += "Buzz";
    if(!(num%7)) result += "Suzz";
    return result;
}
module.exports = fizzBuzz;