class User {
    constructor(id,username,salary){
        this.i =id;
        this.u= username;
        this.s = salary + 100;
    }
    updateUser(name){
        this.u =  name; // update the username property
    }
}

let userOne = new User(100 , 'hadi' , 550);
console.log(userOne.u); // hadi
userOne.updateUser('roy');
console.log(userOne.u); // roy 


let strOne =  "Elzero ";
let strTwo =  new String("Elzero");
console.log(typeof strOne); // Elzero
console.log(typeof strTwo); // object

console.log(strOne instanceof String); // false 
console.log(strTwo instanceof String); // true