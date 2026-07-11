/*
    $  => End With something
    ^  => Start With something
    ?=  => followed by something 
    ?! => Not Followed by something
*/

let myString = "we love Programming";
let names  =  "1OsamaZ 2AhmedZ 3SayedZ 4AlZ 5MahmoudZ 6Mohamed";

console.log(/ing$/ig.test(myString)); // true
console.log(/^we/ig.test(myString)); // true
console.log(/lz$/ig.test(names)); // true
console.log(/^\d/ig.test(names)); // true
console.log(/^\d/ig.test(names)); // true

console.log(names.match(/\d\w{5}(?=Z)/ig));
console.log(names.match(/\d\w{5}(?!Z)/ig));