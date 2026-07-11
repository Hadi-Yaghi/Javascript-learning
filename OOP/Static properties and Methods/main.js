class User {
    static count =0;

    constructor(id,username,salary){
        this.i =id;
        this.u= username;
        this.s = salary ;
        User.count++;
    }
    static sayHello(){
        return `hello from class`;
    }
    static countMembers(){
        return `${this.count} members in this class`;
    }
}
let userOne = new User(100 , 'hadi' , 550);
let userTwo  =  new User (101,`roy`,350);
let userthree  =  new User (101,`peter`,300);
console.log(`name  ${userOne.u}`);
console.log(`Salary ${userTwo.u}`);


console.log(User.sayHello()); // 0
console.log(User.countMembers()); // 3
