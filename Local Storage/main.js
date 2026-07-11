//set
window.localStorage.setItem("color","#F00");
window.localStorage.fontWeight = "bold";
window.localStorage['fontSize']= "20px";

//Get
window.localStorage.getItem("color");
console.log(window.localStorage.color);

//Get key
console.log(window.localStorage.key(0));

//Remove one
// window.localStorage.removeItem("color");

// //Remove all
// window.localStorage.clear();

//set color.page
document.body.style.backgroundColor = window.localStorage.getItem("color");
console.log(window.localStorage);

