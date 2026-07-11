let element  = document.getElementById("my-div");

console.log(element.classList);
console.log(typeof element.classList);
console.log(typeof element.classList.contains("hadi"));
console.log(typeof element.classList.contains("show"));
console.log(typeof element.classList.item("0"));


element.onclick =function(){
    element.classList.add("add-one","ädd-two");

    //if exits it removes the class otherwise add it 
    element.classList.toggle("hadi");
}


