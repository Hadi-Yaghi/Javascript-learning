/*

    - replace
    - replaceAll
*/

let txt ="We loce programming and @ Because @ Is Amazing";

console.log(txt.replace("@", "JavaScript")); // Replace First @
console.log(txt.replaceAll("@", "JavaScript")); // Replace All @

let Re =  /@/ig
console.log(txt.replace(Re, "JavaScript")); // Replace All @