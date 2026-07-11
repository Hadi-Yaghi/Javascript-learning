/*
    Number Methods
    -    Two dots to call a method
    -   toString()
    -   toFixed()
    -   parseInt()
    -   parseFloat()
    -   isInteger()
    -   isNaN()
*/
console.log((100).toString());
console.log((100).toString());
//return two number after the dot
console.log((100.556654).toFixed(2));
//return number
console.log(parseInt("100"));
//return float
console.log(parseFloat("100.33"));

//check if the number is isInteger
//false
console.log(Number.isInteger("100"));
//false
console.log(Number.isInteger(100.500));
//true
console.log(Number.isInteger(100));
//false
console.log(Number.isNaN("hadi"));