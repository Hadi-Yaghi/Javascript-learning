let price = 0;

console.log(`the price is ${price || 200}`); //the output will be 200 because the price is 0 and it is falsy value

let price2 = 100;
console.log(`the price is ${price2 || 200}`); //the output will be 100 because the price2 is 100 and it is truthy value

//nullish coalescing operator
console.log(`the price is ${price ?? 200}`); //the output will be 0 because the price is 0 and it is not null or undefined value
