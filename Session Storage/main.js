// window.localStorage.setItem("color","red");
// window.sessionStorage.setItem("color","blue");


document.querySelector(".name").onblur = function(){
    window.sessionStorage.setItem("input name","this.value");
}