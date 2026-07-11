let datenow =  new Date();
console.log(datenow);

console.log(`#`.repeat(50));
datenow.setTime(0);
console.log(datenow);
console.log(`#`.repeat(50));
datenow.setTime(1000);
console.log(datenow);
console.log(`#`.repeat(66));

datenow.setDate(0); // set date to last day of previous month
console.log(datenow);
console.log(`#`.repeat(50));

datenow.setFullYear(2025,1);
console.log(datenow);
