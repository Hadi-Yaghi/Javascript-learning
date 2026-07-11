let myData = [1,1,1,2,3,"A"];

// let myunique = new Set(myData);
// let myunique = new Set(myData);
let myunique = new Set(myData);
myunique.add(4);
myunique.add(5);
myunique.add(6);

console.log(myunique);
console.log(myunique.size);


//check if the value is found in the set or not
conosole.log(myunique.has("A"));
// myunique.delete(1);
//return true if the value is deleted and false if the value is not found
console.log(myunique.delete(1));
console.log(myunique);
console.log(myunique.size)

