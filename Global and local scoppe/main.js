/* 
scope 
global and local scope
*/

var a =1 ;
let b  =2;

function  showText( ){
    console.log(`Function - From Global ${a}`);
    console.log(`Function - From Global ${b}`);
}

console.log(`From global ${a}`);
console.log(`From global ${b}`);

showText()

