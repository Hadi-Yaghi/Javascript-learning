/*
date and time 
-getime()
*/
let datenow = new Date();
let birthday = new Date(`2006-04-14`);
let dateDiff = datenow - birthday;
console.log(dateDiff /1000 /60/60/24/365);


console.log(datenow.getTime());
console.log(datenow.getDate());
console.log(datenow.getFullYear());
console.log(datenow.getMonth());
console.log(datenow.getDay());
console.log(datenow.getHours());
console.log(datenow.getMinutes());
console.log(datenow.getSeconds());