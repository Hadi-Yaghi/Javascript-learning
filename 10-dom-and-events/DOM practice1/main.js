//create a div with class product  inside it h3 and paragraph
//then make 100 copies of it 




let i =0;
while(i<100){
let myElement = document.createElement("div");
let myHeading = document.createElement("h3");
let myP =document.createElement("p");


myElement.className="product";
let heading = document.createTextNode(`this is product title ${i+1}`);
let par = document.createTextNode("This is a paragraph ");


myElement.appendChild(myHeading);
myHeading.appendChild(heading);
myElement.appendChild(myP);
myP.appendChild(par);

document.body.append(myElement);
i++;

}