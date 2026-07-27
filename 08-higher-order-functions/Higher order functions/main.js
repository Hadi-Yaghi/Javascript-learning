let myNums = [1,2,3,4,5,6];
let newArray =[];
for (let i =0;i<myNums.length;i++){
    newArray.push(myNums[i]+ myNums[i]);
}
console.log(newArray);

//same idea with map 


// let addSelf = myNums.map(function(el,index,array){
//     // console.log(`Current Element => ${el}`);
//     // console.log(`Current Index => ${index}`);
//     // console.log(`Array => ${array}`);
//     // console.log(`this => ${this}`);
//     // return el + el ;

// },10);

// console.log(addSelf);


// let addSelf = myNums.map((element) => element + element);
    



// console.log(addSelf);

function addition(ele){
    return ele  + ele;
}

let add = myNums.map (addition);
console.log(add)