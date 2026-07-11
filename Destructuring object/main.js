// const user = {
//     theName : "Hadi",
//     theage : 20,
//     thetitle : "developer",
//     theCountry : "Lebanon",
// };

// console.log(user.theName);
// console.log(user.theage);
// console.log(user.thetitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theage;
// let thetitle= user.thetitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(thetitle);
// console.log(theCountry)

//to skip a value just dont type it

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
//change the name of the variable
const {
  theName: n,
  theage: a,
  theCountry,
  theColor: co = "Red",
  skills : {html : h},
} = user;

console.log(n);
console.log(a);
// console.log(thetitle);
console.log(co);

console.log(`my progress is ${h}`);

const {html :skillOne ,css :skillTwo} =  user.skills;

console.log(`my progress in html is ${skillOne}`);
console.log(`my progress in css is ${skillTwo}`);