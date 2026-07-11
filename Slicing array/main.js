let myfriends = ["ahmad","mohamed","sayed","hadi",["ali","omar","yousef"]];

console.log(myfriends);
console.log(myfriends.slice()); //the output will be the same as the original array because the slice method returns a new array that is a copy of the original array
console.log(myfriends.slice(0,3)); //the output will be ["ahmad","mohamed","sayed"] because the slice method returns a new array that contains the elements from the original array starting from the index 0 to the index 3 but not including the index 3

console.log(myfriends.slice(-3)); //the output will be ["hadi",["ali","omar","yousef"]] because the slice method returns a new array that contains the elements from the original array starting from the index 3 to the end of the array

myfriends.splice(0,0,"hassan"); //the output will be ["hassan","ahmad","mohamed","sayed","hadi",["ali","omar","yousef"]] because the splice method adds the element "hassan" to the original array at the index 0 and it does not remove any element from the original array    
