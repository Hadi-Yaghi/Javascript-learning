/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

let myString = "AaBbcdefG123!234%^&*";


let atozSmall  =  /[a-z]/g;
let notAtozSmall  =  /[^a-z]/g;
let atozCapital  =  /[A-Z]/g;
let notAtozCapital  =  /[^A-Z]/g;
let aAndcAnde = /[ace]/g;
let notAAndcAnde = /[^ace]/g;
let letterscapsandSmall = /[a-zA-Z]/g;




