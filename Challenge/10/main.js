let chosen = 2;
let myfriends = [
  { title: "Osama", age: 35, available: true, skills: ["Html", "Css"] },
  { title: "Ahmad", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 30, available: true, skills: ["Php", "Laravel"] },
];

function showchosen() {
  let {
    title: t,
    age: a,
    available: av,
    skills: [, s],
  } = myfriends[chosen - 1];

  console.log(t);
  console.log(a);
  console.log(av ? "available" : "not available");
  console.log(`skill is ${s}`);
}
showchosen();
