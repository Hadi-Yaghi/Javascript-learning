/*

    n{x} =>number of times
    n{x,y} =>number of times between x and y
    n{x,} =>number of times at least x
*/

let serials = "S100S S3000S S50000S 5950000S";
console.log(serials.match(/s\d{3}s/ig));
console.log(serials.match(/s\d{4,5}s/ig));
console.log(serials.match(/s\d{4,}s/ig));