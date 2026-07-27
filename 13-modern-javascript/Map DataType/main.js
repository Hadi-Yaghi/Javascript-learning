let myObj = {};
let myEmptyObj = Object.create(null);
let myMap = new Map();


console.log(myObj);
console.log(myEmptyObj);
console.log(myMap);


let mynewObject  =  {
    10 : "number",
    "10" : "String",
};

console.log(mynewObject[10]);



let mynewMap  =  new Map();
mynewMap.set(10, "number");
mynewMap.set("10", "String");

console.log(mynewMap.get(10));
console.log(mynewMap.get("10"));