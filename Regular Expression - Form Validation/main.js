/*
    -input validation for forms

*/

document.getElementById("register").onsubmit = function () {
    let phoneInput = document.getElementById("phone").value;
    let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (0123) 456-7890
    let validResult =  phoneRe.test(phoneInput);

    if(validResult === false){
        return alert("Please Enter a Valid Phone Number");
    }
    return true;
}