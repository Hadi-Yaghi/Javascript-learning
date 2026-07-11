//Array.copyWithin(Target,Start =>  optional ,End = > optional)
//copies a sequence of array elements within the array.

let myArray   = [10,20,30,40,50,"A","B"];

// myArray.copyWithin(3);  // [10,20,30,10,20,30,40]
// myArray.copyWithin(6);  // [10,20,30,40,"B","A","B"]

// myArray.copyWithin(-1);  // [10,20,30,40,"B","A","B"]  same as myArray.copyWithin(myArray.length-1);

// myArray.copyWithin(1,-2);  // [10,"A","B",40,50,"A","B"]  

myArray.copyWithin(1,-2,-1);  // [10,"A",30,40,50,"A","B"]    not including the last index -1-1

console.log(myArray);