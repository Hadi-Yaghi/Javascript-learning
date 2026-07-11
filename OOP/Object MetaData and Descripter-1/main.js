const myobj = {
    a:1,
    b:2,
    
};
Object.defineProperty(myobj,`c`,{
    writable:true,
    emurable:true,
    configurable:true,
    value:3
});
myobj.c=100;

for(let prop in myobj){
    console.log(`${prop} => ${myobj[prop]}`);
}

console.log(delete myobj.c);
console.log(myobj);
