let sentence = "I Love Foood code to Playing Much ";

let samllWords = sentence
  .split(" ")
  .filter(function (e) {
    return e.length <= 4;
  })
  .join(" ");

console.log(samllWords);

let IgnoreNumbers = "Elz123er4o";

let ign = IgnoreNumbers.split("")
  .filter(function (e) {
    return isNaN(parseInt(e));
  })
  .join("");
console.log(ign);
//filter strings + multiply
let mix = "A13BS2ZX";

let multiply = mix
  .split("")
  .filter(function (e) {
    return !isNaN(parseInt(e));
  }).map(function(e){

    return e*e;
  })
  .join("");

  console.log(multiply)
