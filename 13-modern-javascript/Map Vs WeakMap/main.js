// map = > key can be anything
// wakmap = > key can only be an object


let mapuser =  {theName  : "Hadi"};
let myMap = new Map ();

myMap.set(mapuser, "Object Value");

mapuser = null; // overriding the reference of the object

console.log(myMap); 


console.log("£".repeat(20));

let weakMapuser =  {theName  : "Hadi"};
let myWeakMap = new WeakMap ();

myWeakMap.set(weakMapuser, "Object Value");

console.log(myWeakMap); 