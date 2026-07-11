/*
    Array.everty(callback(element,index,Array), thisArg)
    callback: a function to test for each element, taking three arguments:
        element: The current element being processed in the array.
        index: The index of the current element being processed in the array.
        Array: The array every was called upon.
    thisArg: Optional. A value to use as this when executing callback.

*/

const location ={
    20 : "place 1 ",
    30 : "place 2 ",
    10 : "place 3 ",
    50 : "place 4 ",
};


let mainLocation  = 15;


let locationArray =  Object.keys(location);  // ["20","30","10","50"]  all values are string


let locationArrayNumber  =  locationArray.map((e) => +e );  // cast the string to number  [20,30,10,50]

let check =  locationArrayNumber.every(function(e){
    return e > this ;
},mainLocation);

console.log(check);  //false because 10 is not >15
    