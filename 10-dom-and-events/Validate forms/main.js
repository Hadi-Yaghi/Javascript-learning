let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");
document.forms[0].onsubmit= function(e){
    let userValid =false;
    let ageValid =false;

    

    if(userInput !=="" && userInput.value.length <=10){
        userValid=true;
    }
    if(ageInput.value !=""){
        ageValid=true;
    }
    if(userValid === false || ageValid ===false){
        e.preventDefault();
    }
}

// document.links[0].onmouseenter = function(e){
//     e.preventDefault();
// }