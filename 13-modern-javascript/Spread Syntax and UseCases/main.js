console.log("hadi");
console.log(..."hadi") ; // spread syntax  ... is used to expand an iterable (like an array or string) into individual elements.


console.log([..."hadi"]);  // ["h","a","d","i"]   spread syntax can be used to convert a string into an array of characters.

let array1   = [1,2,3];
let array2   = [4,5,6];

let allarray = [...array1,...array2];  // [1,2,3,4,5,6]   spread syntax can be used to concatenate arrays.

console.log(allarray);

//copy an array

let copiedArray = [...array1]; // [1,2,3]   spread syntax can be used to create a shallow copy of an array.

//push inside an array 

let allFriends =  ["hadi","ali","ahmed"];
let thisYearFriends = ["sara","mohamed"];

allfriends.push(...thisYearFriends);  // ["hadi","ali","ahmed","sara","mohamed"]   spread syntax can be used to push multiple elements into an array.

//use the Math Object

let mynums = [10,20,-100,100,50,1000];

console.log(Math.max(...mynums));  // 1000   spread syntax can be used to pass an array of numbers as individual arguments to a function like Math.max().

//spread with objects

let obj1 = {a:1,b:2};
let obj2 = {c:3,d:4};

let mergedObject = {
    ...obj1,
    ...obj2,

    e:5,
};


