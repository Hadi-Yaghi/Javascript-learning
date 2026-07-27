// Get friends with name starts with A 
let friends =  ["Ahmad" ,"Hadi","Roy","Musa","Amgad"];


let filterFriends = friends.filter(function(e){
    return e.startsWith("A");
})
console.log(filterFriends);

//  Get Even  Numbers only
let Number = [11,20,2,5,17,10];

let evennumbers = Number.filter(function(e){
    return e %2 ==0  ;
})
console.log(evennumbers);

// Test  map vs  filter

// let addMap = Number.map(function(e){
//     return e +e ;
// })

// console.log(addMap);

// let addFilter =  Number.filter(function(e){
//     return e +e ;

// })

// console.log(addFilter);


