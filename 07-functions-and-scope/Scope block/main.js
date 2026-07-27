/*  
    scope
    - block scope [ if, switch,For]
*/

var x= 10;
if(10===10){
    let  x = 50;
    console.log(`From  if block ${x}`);
}
console.log(`From  Global ${x}`);