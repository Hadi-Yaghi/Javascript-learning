class User{
    constructor(id,username,salary){
        this.id = id;
        this.username = username || 'unknown';
        this.salary = salary < 500 ? salary + 100 : salary;

        this.msg =  function(){
            return `Hello ${this.username} your salary is  ${this.salary}`;
        };
    }
    //Methods

    writeMsg(){
        return `Hello ${this.username} your salary is  ${this.salary}`;
    }
}

let userOne = new User(100 , 'hadi' , 550);
let userTwo  =  new User (101,`roy`,350);


console.log(`Id ${userOne.id}`);
console.log(`name  ${userOne.username}`);
console.log(`Salary ${userOne.salary}`);
console.log(userOne.msg());
console.log(userOne.writeMsg());

console.log("#".repeat(20));
console.log(`Id ${userTwo.id}`);    
console.log(`name  ${userTwo.username}`);

console.log(`Salary ${userTwo.salary}`);
console.log(userTwo.msg());
console.log(userTwo.writeMsg); // native code 