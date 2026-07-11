const user = {
  theName: "Hadi",
  theage: 20,
  thetitle: "developer",
  theCountry: "Lebanon",
  theColor: "Black",
  skills: ["HTML", "CSS", "JavaScript"],
  addresses: {
    Lebanon: "Baalbeck",
    Ksa: "Jeddah",
  },
};

const {
  theName: n,
  theage: a,
  skills: [one, two, three],
  addresses: { Lebanon: l } 
} = user;


console.log(`your name is ${n}`);
console.log(`your age is ${a}`);
console.log(`your skills are ${one},${two},${three}`);
console.log(`you live in ${l}`);