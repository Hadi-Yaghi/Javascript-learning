function sayHello(userName , age="unkown"){
    // if(age === undefined){
    //     age = "Unkown";
    // }

    // age = age || "unkown";
    return `Hello ${userName} Your Age Is ${age}`;
}
console.log(sayHello("hadi")); 