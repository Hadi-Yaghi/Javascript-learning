/*
    .=> matches any character except newline
    \d => matches any digit (0-9)
    \D => matches any non-digit
    \w => matches any word character (alphanumeric & underscore)
    \W => matches any non-word character
    \s => matches any whitespace character (spaces, tabs, line breaks)
    \S => matches any non-whitespace character
*/
let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";
let dot = /./g;
let world = /\w/g;
let notWorld = /\W/g;


let validEmail =  /\w@\w.(com|net/g;
console.log(email.match(dot));
console.log(email.match(world));
console.log(email.match(notWorld));

console.log(email.match(validEmail));