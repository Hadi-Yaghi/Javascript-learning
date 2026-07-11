let myElement = document.querySelector(".js");

console.log(myElement.innerHTML);
console.log(myElement.textContent);

myElement.innerHTML="Text From <span>Main,js</span> file";

//this will make it as a text
myElement.textContent = "Text From <span>Main,js</span> file";

document.images[0].src ="https://google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "picture";
document.images[0].id = "pic";
document.images[0].className= "img";

let myLink = document.querySelector(". link");


myLink.getAttribute("class");
myLink.getAttribute("href");


myLink.setAttribute("href","Https:kusa.com");
myLink.setAttribute("title","kusa");


