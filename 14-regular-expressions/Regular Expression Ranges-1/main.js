let tld = "Com Net Org Info Io Co";
let tldRe = /(org|info|io)/ig;

console.log(tld.match(tldRe));  // ["Org"]
console.log(tld.match(tldRe)); // ["Org", "Info", "Io"]


let nums =  "12345678910";

let numRe = /[0-9]/;
console.log(nums.match(numRe)); // ["1"]
let numRe2 = /[0-9]/g;
console.log(nums.match(numRe2)); // ["1", "2", "3", "4", "5", "6", "7", "8", "9", "1", "0"]

let Specialnums =  "123456#@!78910";

let SpecialnumRe = /[^0-9]/g;
console.log(nums.match(SpecialnumRe)); // ["#", "@", "!"]

let practice  =  "Os1 Os1Os Os2 Os8 Os8Os";

let practiceRe = /Os[5-9]/;
console.log(practice.match(practice)); // ["Os8"]
let practiceRe2 = /Os[5-9]Os/g;
console.log(practice.match(practiceRe2)); // ["Os8Os"] 