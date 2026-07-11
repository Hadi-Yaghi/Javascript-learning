//normal way
let user= new Object({
    age: 20,
});  
console.log(user.age)
user.age =  20;
user["country"] = "eygpt";


user.sayHello = function (){
    return `hello `;
}