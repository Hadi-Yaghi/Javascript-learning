/*
    constructor function new syntax
*/

class User {
    constructor(id,username,salary){
        this.i =id;
        this.u= username;
        this.s = salary + 100;
    }
}

let userOne = new User(100 , 'hadi' , 550);
console.log(`Id ${userOne.id}`);
console.log(`name  ${userOne.username}`);
console.log(`Salary ${userOne.salary}`);

console.log(userOne instanceof User); // true
console.log(userOne.constructor === User); // true