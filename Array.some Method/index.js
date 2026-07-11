/*
    Array.some(callback(element,index,Array), thisArg)
*/

let  nums = [1,2,3,4,5,6,7];

//check number >5
// let check =  nums.some(function(e){
//     console.log("Test"); // print "Test" 6 times because the first 5 elements are not >5
//     return  e>5;
// });
// console.log(check);  //true

let mynumber = 5;
let check =  nums.some(function(e){
    return  e>this;
},mynumber );


// let check =  nums.some((e) => e>5); //true


function checkValue(arr,val){
    return arr.some(function(e){
        return e === val;
    });

}

console.log(checkValue(nums,20));  //false
console.log(checkValue(nums,5));  //true



let Range ={
    min:10,
    max:20,
    
};

let checkRange =  nums.some(function(e){
    return e> this.min && e < this.max ;
},Range);

console.log(checkRange);  //true    