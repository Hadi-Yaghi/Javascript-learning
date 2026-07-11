/*
    constructor function
*/


function User (id ,username , salary){
    this.id = id;
    this.username = username;
    this.salary = salary +100;
}

let userOne =  new User(100 , 'hadi' , 550);

let userTwo  =  new User (101,`roy`,350);
let userthree  =  new User (101,`peter`,300);

console.log(`Id ${userOne.id}`);
console.log(`name  ${userOne.username}`);
console.log(`Salary ${userOne.salary}`);

console.log(`Id ${userTwo.id}`);
console.log(`name  ${userTwo.username}`);
console.log(`Salary ${userTwo.salary}`);

console.log(`Id ${userthree.id}`);
console.log(`name  ${userthree.username}`);
console.log(`Salary ${userthree.salary}`);

// const userOne =  {
//     id: 100,
//     username : 'hadi',
//     salary :550,
// };
// const userTwo =  {
//     id: 101,
//     username : 'Roy',
//     salary :350,
// };
// const userThree =  {
//     id: 102,
//     username : 'peter',
//     salary :30,
// };
