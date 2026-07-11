
// let a =1;
// let b=2;
// let c =3;


// let myfriend =["ahmad","ali","Roze"];

// [a,b,c]  = myfriend;



// console.log(a)
// console.log(b)
// console.log(c)

// //this will leave a space for the third one 
// let [x,y,,z] = myfriend;

// console.log(x);
// console.log(y);
// console.log(z);

let myfriends= ["ahmad" ,"syed","ali",["shady","Amr",["Mohmad","Gamal"]]];
//this will skip all the element and just prinitng the needed one
let [, , , [a , , [,b]]]= myfriends;

console.log(a);
console.log(b);