
const user = {
  theName: "Hadi",
  theage: 20,
  thetitle: "developer",
  theCountry: "Lebanon",
  theColor: "Black",
  skills: {
    html: 70,
    css: 80,
  },
};
showDetails(user)
// function showDetails(obj){
//     console.log(`your name is ${obj.theName}`);
//     console.log(`your age is ${obj.theage}`);
//     console.log(`your css skill progress is ${obj.skills.css}`);
// }
function showDetails({theName :n,theage,skills : {css}} = user){
    console.log(`your name is ${n}`);
    console.log(`your age is ${theage}`);
    console.log(`your css skill progress is ${css}`);
}