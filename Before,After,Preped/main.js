let element  = document.getElementById("my-div");

let creatP = document.createElement("p");

//add the p after the div
// element.after(creatP);

//add the text at the end of the div
element.append("Hello world")
//add the text in the start of the div
element.prepend("hello");
//remoev the element
element.remove();