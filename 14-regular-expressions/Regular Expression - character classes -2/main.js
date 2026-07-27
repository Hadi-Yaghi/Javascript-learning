/*
    \b=> matches a word boundary
    \B => matches a non-word boundary
*/

let names =  "Hadi 1Hadi 2Hadi 3hadi 4Hadi Hadi89372 Roy Ali";

let re =  /hadi/ig; // i is used for case insensitive and g is used for global search
console.log(names.match(re));

let re2 =  /\bhadi/ig; // i is used for case insensitive and g is used for global search
console.log(names.match(re2));
let re3 =  /\Bhadi/ig; // i is used for case insensitive and g is used for global search
console.log(names.match(re3));
let re4 =  /(\bhadi|hadi\b)/ig; // i is used for case insensitive and g is used for global search
console.log(names.match(re4));

console.log(re.test(names)); //true