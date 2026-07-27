//start date 
let start =  new Date ();

//operation
for (let i = 0; i < 1000000; i++) {
    let x = Math.sqrt(i);
}

//end date
let end = new Date ();

let duration = end - start ;

console.log(`Operation took ${duration} milliseconds`);