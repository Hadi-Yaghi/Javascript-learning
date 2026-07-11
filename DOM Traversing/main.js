let span = document.querySelector(".two");
console.log(span.nextElementSibling.remove());
console.log(span.parentElement);

span.onclick = function(){
    span.parentElement.remove();
}
