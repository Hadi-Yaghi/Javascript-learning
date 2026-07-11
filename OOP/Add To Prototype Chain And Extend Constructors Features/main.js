
class User {
    constructor(id,username){
        this.i =id;
        this.u= username;
        
    }
    sayHello(){
        return `hello ${this.u}`;
    }

}
let userOne = new User(1099,`hadi`);
console.log(User.prototype);


User.prototype.sayWelcome = function(){
    return `Welcome ${this.u}`;
}

Object.prototype.love= `Elzero web school`;

 