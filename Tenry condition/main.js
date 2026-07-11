let theName = " hadi ";
let theGender = "Male";
let theAge = 20;

if (theGender === "Male") {
    console.log("Mr");
} else {
    console.log("Mrs");
}

//condition ? if true :  if  false

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

//another way to do it
let result = theGender === "Male" ? "Mr" : "Mrs";
console.log(result);

//another example
console.log(`hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

theAge < 20
    ? console.log("Hello")
    : theAge > 20 && theAge < 60
    ? console.log("Welcome")
    : theAge > 60
    ? console.log("Greetings")
    : console.log("Invalid age");
