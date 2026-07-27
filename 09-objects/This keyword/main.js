//winow
console.log(this);
console.log(this  ===  window);

myVar = 100;
console.log(window.myVar);
console.log(this.myVar);

function sayHello(){
   return this;

}
sayHello();


document.getElementById("cl").onclick = function (){
    console.log(this);
}