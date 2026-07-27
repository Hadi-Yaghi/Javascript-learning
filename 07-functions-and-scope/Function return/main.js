function sayHello(userName){
    return `Hello ${userName}`;
}
let result = sayHello("osama");
console.log(result);


function calc(num1,num2){
    return a + b ;
}
let results = calc(10,20);
console.log(result + 100);


console.log("=".repeat(14));

function generate(start,end){
    for(let i= start;i<=end;i++){
        console.log(i);
        if(i=== 15){
            return `Interrputting`;
        }
    }
}

generate(10,20);