// let names = function(...names){
//     return `String [${names.join("], [")}] => Done !`
// }
// console.log(names("Hadi","Yaghi","Ali","Ahmad"))


let names = (...names) => `String [${names.join("], [")}] => Done !`;

console.log(names("Hadi","Yaghi","Ali","Ahmad"))


let myNumbers = [20,50,10,60];

// let calc = (one,two,...nums)=> {

//     let result = one+ two;
//     for(let i =0 ; i<nums.length;i++){
        
//         result += nums[i];
//         if(result ==80){
//             break;
//         }

//     }
//     return `${result}`;
// }

// console.log(calc(10,20,50,60)); 
let calc = function(one,two,...nums) {

    let result = one+ two;
    for(let i =0 ; i<nums.length;i++){
        
        result += nums[i];
        if(result ==80){
            break;
        }

    }
    return `${result}`;
}

console.log(calc(10,20,50,60)); 