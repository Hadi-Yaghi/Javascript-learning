// setTimeout(function(){
//     console.log(`Msh`);

// // },300); 
// setTimeout(sayMsg,399);
// function sayMsg(){
//     console.log(`Message`);
// }
// setTimeout(sayMsg,3000);
// function sayMsg(){
//     console.log(`Message`);
// }

//it wait for 3 seconds before it work 
//hadi and 20 are the argument for sayMsg function
// setTimeout(sayMsg,3000,"hadi",20);


// function sayMsg(user,age){
//     console.log(`Message for ${user} his age is ${age}`);
// }

let counter = setTimeout(sayMsg,3000);
function sayMsg(user,age){
    console.log(`Say Message`);
}


let btn = document.querySelector("button");
btn.onclick = function (){
    clearTimeout(counter);
}