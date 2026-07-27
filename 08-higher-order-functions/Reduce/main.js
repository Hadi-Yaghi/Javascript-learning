let nums = [10,20,15,30];

// let add = nums.reduce(function (acc,current,index,array){
//     return acc +current;

// });

// console.log(add);

let add = nums.reduce(function(acc,current,index,arr){
    console.log(`Acc => ${acc}`);
    console.log(`Current Element => ${current}`);
    console.log(`Current Element Index => ${index}`);
    console.log(`Array => ${arr}`);
    console.log(acc + current);
    console.log("#".repeat(10));
    return acc +current ;
},5);


console.log(add);
