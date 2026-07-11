let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,s,c,h,o,o,l,2,0,Z";

let fixedString = myString
  .split(",")
  .filter(function (e) {
    // Remove numbers
    return isNaN(parseInt(e));
  })
  .map(function (e, index) {
    // Remove first letter from "EE"
    if (index === 0) {
      return e[1];
    }

    // Remove last "Z"
    if (e === "Z") {
      return "";
    }

    return e;
  })
  .reduce(function (acc, current) {
    return acc + current;
  });

console.log(fixedString.split("_").join(" "));