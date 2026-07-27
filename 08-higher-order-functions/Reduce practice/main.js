/* 
    Reduce 
    - longest word 
    -Remove Character + use Reduce
*/
let theBiggest = ["Bla","Propaganda","Other","AAA","Battery","Test"];




let check = theBiggest.reduce(function(acc,current){
    console.log(`Acc => ${acc}`);
    console.log(`Current Element => ${current}`);
    
    console.log(acc.length >current.length  ? acc : current );
    console.log("#".repeat(10));
    return acc.length >current.length  ? acc : current ;
});


console.log(check);

let removeChar =["E","@","@","L","Z","@","@","Ë","R","@","O"];

let finalString = removeChar.filter(function(e){
    return !e.startsWith("@");
}).reduce(function(acc,current){
    return `${acc}${current}`;
});
console.log(finalString);