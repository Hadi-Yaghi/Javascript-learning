let myp = document.querySelector("p").cloneNode(true);
let myDiv = document.querySelector("div");


myp.id = `${myp.id} cloned`;
myDiv.appendChild(myp);