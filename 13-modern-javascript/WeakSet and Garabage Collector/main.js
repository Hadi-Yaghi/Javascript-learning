let myset = new Set([1,1,1,2,3,"A"]);

console.log(myset);
console.log(`size of elements in set is ${myset.size}`);

let iterator = myset.keys();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);


//for each
myset.forEach((e) => console.log(e));


