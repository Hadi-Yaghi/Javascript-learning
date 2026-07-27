let myIdElement = document.getElementById("my-div");
let myTagElement = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("my-span");
let myQueryElement = document.querySelector(".special");
let myAllQueryElement = document.querySelectorAll(".my-span");

console.log(myIdElement);
console.log(myTagElement[1]);
console.log(myClassElement);
console.log(myQueryElement);
console.log(myAllQueryElement);

console.log(document.title);
console.log(document.body);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);