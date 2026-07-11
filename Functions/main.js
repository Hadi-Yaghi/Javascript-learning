/* 
    functions 
*/
function sayHello(userName,age){
    console.log(`Hello ${userName} your age is ${age}`);
    if(age <20){
        console.log(`App is not suitable for you`);
        
    }else{
        console.log(`Hello ${userName} Your age is ${age}`);
        }
}

function generateYear(start,end,exclude){
    for(let i = start;i<=end ;i++ ){
        if(i=== exclude){
            continue;
        }
        console.log(i);
    }
}
generateYear(1982,2021)
