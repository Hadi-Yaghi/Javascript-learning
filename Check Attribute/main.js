console.log(document.getElementsByTagName("p")[0].attributes);
let myp = document.getElementsByTagName("p")[0];
if(myp.hasAttribute("data-src")){
    if(myp.getAttribute("data-src") == ""){
        myp.removeAttribute("data-src");
    }else{
        myp.setAttribute("data-src","New Value");
    }
    
}else{
    console.log(`Not found`);
}
if(myp.hasAttribute()){
    console.log(`Has attrib`)
}
if(document.getElementsByTagName("div").hasAttribute()){
    console.log(`Has attrib`)
}
