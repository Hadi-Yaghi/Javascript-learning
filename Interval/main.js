// setInterval (function(){
//     console.log(`say msg`)
// },1000);

let div = document.querySelector("div");

function countdown (){
    div.innerHTML -=1;
    if(div.innerHTML ==="0"){
        clearInterval(counter);
    }
}

let counter = setInterval(countdown,1000);