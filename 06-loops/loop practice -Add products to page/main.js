let products = ["keyboard","mouse","pen","pad","Monitor"];
let  colors =["red","green","blue"];
let showcount = 5;

document.write(`<h1>show ${showcount} products</h1>`);

for(let i=0;i<showcount;i++){
    document.write(`<div>`);
    document.write(`<h3>[${i+1}] ${products[i]}</h3>`);
    for(let j=0;j<colors.length;j++){
        document.write(`<p>${colors[j]} </p>`);
    }
    document.write(`<p>${colors.join(" | ")} </p>`);
    document.write(`</div>`);
    
}