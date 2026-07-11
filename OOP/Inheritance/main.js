//parent class
class User {
    constructor(id,username){
        this.i =id;
        this.u= username;
        
    }
    sayHello(){
        return `hello ${this.u}`;
    }
}
//child class
class Admin extends User {
    constructor(id,username,permissions){
       super(id,username);
       this.permissions= permissions;
    }
    
}
class superAdmin extends Admin{
    constructor(id,username,permissions,role){
        super(id,username,permissions);
        this.role= role;
    }
}
let userOne = new User(100 , 'hadi' , 550);

let adminOne = new Admin(101,`admin`,1);
console.log(userOne.u);
console.log(userOne.sayHello());
console.log(`#`.repeat(30));
console.log(adminOne.i);
console.log(adminOne.u);
console.log(adminOne.permissions);
console.log(adminOne.sayHello());
let superAdmins = new superAdmin(102,`superAdmin`,2,`super`);
console.log(`#`.repeat(30));
console.log(adminOne instanceof Admin);
console.log(superAdmins.u);
console.log(superAdmins.role);