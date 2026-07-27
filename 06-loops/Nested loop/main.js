// Nested Loop

let products = ["keyboard","mouse","pen","pad","Monitor"];
let colors = ["Red","Green","Black"];
let models = [2020,2021,20222,2023,2025,2026];

for(let i =0;i<products.length;i++){
    console.log("#".repeat(15));
    console.log(`${products[i]}`);
    console.log("#".repeat(15));
    console.log("Colors:");
    for(let j=0;j<colors.length;j++){
        console.log(` - ${colors[j]}`);
    }
    console.log("Models:");
    for(let k=0;k<models.length;k++){
        console.log(` - ${models[k]}`);
    }

}
