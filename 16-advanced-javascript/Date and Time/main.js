let datenow = new Date();
console.log(datenow);
console.log(Date.now());

let seconds= Date.now()/1000;
console.log(seconds);
let minutes= seconds/60;
console.log(minutes);
let hours= minutes/60;
console.log(hours);
let days= hours/24; 
console.log(days);

let year = days/365;   
console.log(year);