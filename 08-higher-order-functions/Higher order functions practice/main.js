let sawappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreBooleans = "Elz123er4o";

//Arrow functon version

let sw = sawappingCases
  .split("")
  .map((ele) =>
    ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase(),
  )
  .join("");

console.log(sw);

let int = invertedNumbers.map((e) => -e).join(" ");
console.log(int);

let x = ignoreBooleans
  .split("")
  .map( (e) => {
    isNaN(parseInt(e)) ? e : "";
  })
  .join("");

console.log(x);
