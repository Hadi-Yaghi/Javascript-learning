let myElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom"); 
let myText = document.createTextNode("product One");
myElement.className = "product";
myElement.setAttributeNode(myAttr);

let myComment = document.createComment("This is Div");


//append comment to element\
myElement.appendChild(myComment);

//Append Text to myElement

myElement.appendChild(myText);


//append element to body

document.body.appendChild(myElement);